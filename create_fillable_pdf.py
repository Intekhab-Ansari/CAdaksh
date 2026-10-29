"""
Script to generate an executive, single-page interactive fillable PDF form
for collecting client launch data for Daksh Desai & Associates.
Strictly 1 Page (A4) with zero overlapping.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfgen import canvas

def draw_header(c):
    width, height = A4
    
    # Top Deep Navy Banner
    banner_h = 68
    c.setFillColor(colors.HexColor("#0B1528"))
    c.rect(0, height - banner_h, width, banner_h, fill=True, stroke=False)
    
    # Sovereign Gold Accent Line
    c.setFillColor(colors.HexColor("#C5A059"))
    c.rect(0, height - banner_h - 2.5, width, 2.5, fill=True, stroke=False)
    
    # Left Header Branding
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 15)
    c.drawString(36, height - 32, "DAKSH DESAI & ASSOCIATES")
    
    c.setFillColor(colors.HexColor("#C5A059"))
    c.setFont("Helvetica-Bold", 7.8)
    c.drawString(36, height - 46, "CHARTERED ACCOUNTANTS * MUMBAI * ICAI REGISTERED PRACTICE")
    
    # Right Header Document Title
    c.setFillColor(colors.HexColor("#E2E8F0"))
    c.setFont("Helvetica-Bold", 9)
    c.drawRightString(width - 36, height - 32, "WEBSITE ONBOARDING DATA FORM")
    
    c.setFillColor(colors.HexColor("#94A3B8"))
    c.setFont("Helvetica-Oblique", 7.2)
    c.drawRightString(width - 36, height - 46, "Interactive Fillable PDF - Type in boxes & save (Ctrl+S)")
    
    # Bottom Footer Line
    c.setStrokeColor(colors.HexColor("#CBD5E1"))
    c.setLineWidth(0.7)
    c.line(36, 36, width - 36, 36)
    
    c.setFillColor(colors.HexColor("#64748B"))
    c.setFont("Helvetica", 7.2)
    c.drawString(36, 25, "Daksh Desai & Associates - Strictly Compliant with ICAI Website Guidelines (Chartered Accountants Act, 1949)")
    c.drawRightString(width - 36, 25, "Confidential Client Data Form")


def draw_section_bar(c, x, y, title, subtitle=""):
    width, _ = A4
    box_w = width - (x * 2)
    h = 19
    
    # Dark Navy Bar
    c.setFillColor(colors.HexColor("#112540"))
    c.rect(x, y - h, box_w, h, fill=True, stroke=False)
    
    # Gold Left Accent Marker
    c.setFillColor(colors.HexColor("#C5A059"))
    c.rect(x, y - h, 3.5, h, fill=True, stroke=False)
    
    # Title
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 8.2)
    c.drawString(x + 10, y - 13.5, title)
    
    # Subtitle
    if subtitle:
        c.setFillColor(colors.HexColor("#94A3B8"))
        c.setFont("Helvetica-Oblique", 7)
        c.drawRightString(x + box_w - 10, y - 13.5, subtitle)


def draw_field_clean(c, x, y_label, w, h, field_name, label, hint="", default=""):
    """
    Renders field label strictly above the input box with zero collision.
    """
    c.setFillColor(colors.HexColor("#0F172A"))
    c.setFont("Helvetica-Bold", 7.8)
    label_w = c.stringWidth(label, "Helvetica-Bold", 7.8)
    c.drawString(x, y_label, label)
    
    if hint:
        avail_w = w - label_w - 10
        c.setFont("Helvetica-Oblique", 6.8)
        c.setFillColor(colors.HexColor("#64748B"))
        hint_text = f"({hint})"
        if c.stringWidth(hint_text, "Helvetica-Oblique", 6.8) <= avail_w:
            c.drawString(x + label_w + 5, y_label, hint_text)
    
    # Text input box placed cleanly below label baseline
    input_y = y_label - 3.5 - h
    c.acroForm.textfield(
        name=field_name,
        tooltip=label,
        x=x,
        y=input_y,
        width=w,
        height=h,
        value=default,
        borderColor=colors.HexColor("#94A3B8"),
        fillColor=colors.HexColor("#F8FAFC"),
        textColor=colors.HexColor("#0B1528"),
        fontSize=8.5,
        borderStyle='solid',
        borderWidth=1
    )


def build_pdf(filename="Daksh_Desai_Website_Data_Form.pdf"):
    width, height = A4
    c = canvas.Canvas(filename, pagesize=A4)
    c.setTitle("Daksh Desai & Associates - Website Launch Data Form")
    c.setAuthor("Daksh Desai & Associates")
    
    margin_x = 36
    content_w = width - (margin_x * 2)
    col_gap = 14
    half_w = (content_w - col_gap) / 2
    third_w = (content_w - (col_gap * 2)) / 3
    box_h = 18.5  # standard input box height
    row_step = box_h + 16.5  # distance between row baselines = 35pt
    
    # Draw Header & Footer
    draw_header(c)
    
    # =========================================================================
    # SECTION 1: STATUTORY ICAI CREDENTIALS
    # =========================================================================
    curr_y = height - 85  # y = 756
    draw_section_bar(c, margin_x, curr_y, "1. STATUTORY ICAI PRACTICE CREDENTIALS", "Official ICAI Registration Particulars")
    
    # Row 1
    curr_y = curr_y - 19 - 13  # y_label = 724
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "firm_name", "ICAI Approved Firm Name", "Exact legal name", "Daksh Desai & Associates")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "frn_number", "Firm Registration Number (FRN)", "e.g. 1XXXXXW")
    
    # Row 2
    curr_y = curr_y - row_step  # y_label = 689
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "proprietor_name", "Proprietor / Managing Partner Name", "With designation", "CA Daksh Desai, ACA")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "membership_no", "ICAI Membership Number (M. No.)", "6-digit ID")
    
    # Row 3
    curr_y = curr_y - row_step  # y_label = 654
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "est_year", "Year of Establishment", "e.g. 2024 or 2026")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "degrees", "Academic & Professional Degrees", "e.g. ACA, B.Com", "ACA, B.Com")
    
    # =========================================================================
    # SECTION 2: OFFICIAL PRACTICE CONTACT CHANNELS
    # =========================================================================
    curr_y = curr_y - (box_h + 20)  # y = 615
    draw_section_bar(c, margin_x, curr_y, "2. OFFICIAL PRACTICE CONTACT CHANNELS", "Displayed on Header, Footer & Contact Desk")
    
    # Row 1
    curr_y = curr_y - 19 - 13  # y_label = 583
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "primary_phone", "Primary Direct / Mobile Number", "With WhatsApp")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "alternate_phone", "Alternate / Office Landline", "Optional")
    
    # Row 2
    curr_y = curr_y - row_step  # y_label = 548
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "primary_email", "Statutory Practice Email", "e.g. info@cadakshdesaiassociates.com")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "office_hours", "Chambers Office Working Hours", "e.g. Mon-Sat 10am-7pm", "Mon-Sat: 10:00 AM - 7:00 PM IST")
    
    # Row 3
    curr_y = curr_y - row_step  # y_label = 513
    draw_field_clean(c, margin_x, curr_y, content_w, box_h, "chambers_address_1", "Chambers Registered Address - Line 1", "Office / Suite No., Building Name")
    
    # Row 4
    curr_y = curr_y - row_step  # y_label = 478
    draw_field_clean(c, margin_x, curr_y, content_w, box_h, "chambers_address_2", "Chambers Registered Address - Line 2", "Street, Landmark, Area")
    
    # Row 5
    curr_y = curr_y - row_step  # y_label = 443
    draw_field_clean(c, margin_x, curr_y, third_w, box_h, "city", "City", "", "Mumbai")
    draw_field_clean(c, margin_x + third_w + col_gap, curr_y, third_w, box_h, "pincode", "PIN Code", "e.g. 400001")
    draw_field_clean(c, margin_x + (third_w * 2) + (col_gap * 2), curr_y, third_w, box_h, "state", "State", "", "Maharashtra")
    
    # =========================================================================
    # SECTION 3: DIGITAL ASSETS & WEB PRESENCE
    # =========================================================================
    curr_y = curr_y - (box_h + 20)  # y = 404
    draw_section_bar(c, margin_x, curr_y, "3. DIGITAL ASSETS & WEB PRESENCE", "Navigation & Professional Social Links")
    
    # Row 1
    curr_y = curr_y - 19 - 13  # y_label = 372
    draw_field_clean(c, margin_x, curr_y, content_w, box_h, "maps_url", "Google Maps Chamber Location Link", "Share link from Google Maps for client navigation")
    
    # Row 2
    curr_y = curr_y - row_step  # y_label = 337
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "linkedin_personal", "Proprietor LinkedIn Profile URL", "e.g. linkedin.com/in/...")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "linkedin_firm", "Firm LinkedIn Page URL", "Optional")
    
    # Row 3
    curr_y = curr_y - row_step  # y_label = 302
    draw_field_clean(c, margin_x, curr_y, content_w, box_h, "domain_url", "Official Website Domain Name", "Configured production domain", "dakshdesaiassociates.com")
    
    # =========================================================================
    # CONFIRMATION & RETURN BOX (Spacious, Clean)
    # =========================================================================
    curr_y = curr_y - (box_h + 22)  # y = 261
    card_h = 92
    
    # Card Container
    c.setFillColor(colors.HexColor("#F8FAFC"))
    c.setStrokeColor(colors.HexColor("#C5A059"))
    c.setLineWidth(1)
    c.roundRect(margin_x, curr_y - card_h, content_w, card_h, 4, fill=True, stroke=True)
    
    # Card Header
    c.setFillColor(colors.HexColor("#0B1528"))
    c.setFont("Helvetica-Bold", 8)
    c.drawString(margin_x + 12, curr_y - 14, "ATTACHMENT & RETURN CONFIRMATION:")
    
    # Checkbox 1: Photo
    c.acroForm.checkbox(
        name="cb_photo",
        tooltip="Passport Photograph attached",
        x=margin_x + 12,
        y=curr_y - 34,
        size=11,
        buttonStyle='check',
        borderColor=colors.HexColor("#94A3B8"),
        fillColor=colors.HexColor("#FFFFFF"),
        textColor=colors.HexColor("#0B1528")
    )
    c.setFillColor(colors.HexColor("#1E293B"))
    c.setFont("Helvetica", 7.6)
    c.drawString(margin_x + 28, curr_y - 31, "35x45mm Passport Photograph attached (High-resolution, neutral background, formal business attire per ICAI rules)")
    
    # Checkbox 2: Consent
    c.acroForm.checkbox(
        name="cb_verified",
        tooltip="Details verified with ICAI records",
        x=margin_x + 12,
        y=curr_y - 52,
        size=11,
        buttonStyle='check',
        borderColor=colors.HexColor("#94A3B8"),
        fillColor=colors.HexColor("#FFFFFF"),
        textColor=colors.HexColor("#0B1528")
    )
    c.drawString(margin_x + 28, curr_y - 49, "I confirm that all particulars above are authentic and accurately match ICAI registration records.")
    
    # Bottom Instruction Line
    c.setFillColor(colors.HexColor("#64748B"))
    c.setFont("Helvetica-Oblique", 7.2)
    c.drawString(margin_x + 12, curr_y - 72, "Please save this completed PDF (Ctrl + S) and return it via WhatsApp or Email along with your photograph.")
    c.drawString(margin_x + 12, curr_y - 83, "Your website at https://dakshdesaiassociates.com will be updated immediately upon receipt.")
    
    # Single page save!
    c.save()
    print(f"Strict 1-page fillable PDF successfully created at: {filename}")

if __name__ == "__main__":
    build_pdf()
