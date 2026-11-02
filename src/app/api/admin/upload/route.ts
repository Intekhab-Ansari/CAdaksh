import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { validateAdminKey } from '@/lib/adminAuth';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const passkey = formData.get('passkey') as string;
    const file = formData.get('file') as File | null;

    const authCheck = await validateAdminKey(passkey);
    if (!authCheck.valid) {
      return NextResponse.json({ error: authCheck.reason || 'Unauthorized: Invalid Admin Passkey.' }, { status: 401 });
    }

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded.' }, { status: 400 });
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Only image files (JPG, PNG, WEBP, SVG) are allowed.' },
        { status: 400 }
      );
    }

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be under 5MB.' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize extension
    const ext = path.extname(file.name).toLowerCase() || '.jpg';
    const filename = `img_${Date.now()}_${Math.random().toString(36).substring(2, 8)}${ext}`;

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);
    await fs.writeFile(filePath, buffer);

    const publicUrl = `/uploads/${filename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename,
    });
  } catch (err) {
    console.error('File upload error:', err);
    return NextResponse.json({ error: 'Failed to upload image file.' }, { status: 500 });
  }
}

