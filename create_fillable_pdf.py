"""
Script to generate an executive, interactive fillable PDF form
for collecting client launch data for Daksh Desai & Associates.
Precision-engineered layout with guaranteed zero overlapping.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfgen import canvas

def draw_header(c, page_num, total_pages=2):
    width, height = A4
    
    # Top Deep Navy Banner
    c.setFillColor(colors.HexColor("#0B1528"))
    c.rect(0, height - 76, width, 76, fill=True, stroke=False)
    
    # Sovereign Gold Accent Hairline
    c.setFillColor(colors.HexColor("#C5A059"))
    c.rect(0, height - 79, width, 3, fill=True, stroke=False)
    
    # Left Branding
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(36, height - 36, "DAKSH DESAI & ASSOCIATES")
    
    c.setFillColor(colors.HexColor("#C5A059"))
    c.setFont("Helvetica-Bold", 8)
    c.drawString(36, height - 50, "CHARTERED ACCOUNTANTS * MUMBAI * ICAI REGISTERED PRACTICE")
    
    # Right Document Title
    c.setFillColor(colors.HexColor("#E2E8F0"))
    c.setFont("Helvetica-Bold", 8.5)
    c.drawRightString(width - 36, height - 36, "WEBSITE ONBOARDING DATA FORM")
    
    c.setFillColor(colors.HexColor("#94A3B8"))
    c.setFont("Helvetica-Oblique", 7.5)
    c.drawRightString(width - 36, height - 50, "Interactive Fillable PDF - Type in fields & save")
    
    # Bottom Footer
    c.setStrokeColor(colors.HexColor("#CBD5E1"))
    c.setLineWidth(0.7)
    c.line(36, 40, width - 36, 40)
    
    c.setFillColor(colors.HexColor("#64748B"))
    c.setFont("Helvetica", 7.5)
    c.drawString(36, 28, "Daksh Desai & Associates - Strictly Compliant with ICAI Website Guidelines (1949 Act)")
    c.drawRightString(width - 36, 28, f"Page {page_num} of {total_pages}")


def draw_section_bar(c, x, y, title, subtitle=""):
    width, _ = A4
    box_w = width - (x * 2)
    h = 20
    
    # Background
    c.setFillColor(colors.HexColor("#112540"))
    c.rect(x, y - h, box_w, h, fill=True, stroke=False)
    
    # Gold left bar
    c.setFillColor(colors.HexColor("#C5A059"))
    c.rect(x, y - h, 4, h, fill=True, stroke=False)
    
    # Title
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(x + 10, y - 14, title)
    
    # Subtitle
    if subtitle:
        c.setFillColor(colors.HexColor("#94A3B8"))
        c.setFont("Helvetica-Oblique", 7.2)
        c.drawRightString(x + box_w - 10, y - 14, subtitle)


def draw_field_clean(c, x, y_label, w, h, field_name, label, hint="", default=""):
    """
    Renders label strictly above the input box with zero collision.
    y_label: baseline for label text
    h: height of input box
    """
    c.setFillColor(colors.HexColor("#0F172A"))
    c.setFont("Helvetica-Bold", 8)
    label_w = c.stringWidth(label, "Helvetica-Bold", 8)
    c.drawString(x, y_label, label)
    
    if hint:
        avail_w = w - label_w - 10
        c.setFont("Helvetica-Oblique", 7)
        c.setFillColor(colors.HexColor("#64748B"))
        hint_text = f"({hint})"
        if c.stringWidth(hint_text, "Helvetica-Oblique", 7) <= avail_w:
            c.drawString(x + label_w + 6, y_label, hint_text)
    
    # Text input box placed cleanly 4pt below label baseline
    input_y = y_label - 4 - h
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
    box_h = 20  # standard input box height
    
    # =========================================================================
    # PAGE 1: STATUTORY CREDENTIALS & CONTACT CHANNELS
    # =========================================================================
    draw_header(c, page_num=1, total_pages=2)
    
    # Instructions Box
    curr_y = height - 92
    inst_h = 32
    c.setFillColor(colors.HexColor("#F1F5F9"))
    c.setStrokeColor(colors.HexColor("#CBD5E1"))
    c.setLineWidth(0.8)
    c.roundRect(margin_x, curr_y - inst_h, content_w, inst_h, 3, fill=True, stroke=True)
    
    c.setFillColor(colors.HexColor("#0F172A"))
    c.setFont("Helvetica-Bold", 7.8)
    c.drawString(margin_x + 10, curr_y - 12, "INSTRUCTIONS FOR CA DAKSH DESAI:")
    c.setFillColor(colors.HexColor("#475569"))
    c.setFont("Helvetica", 7.3)
    c.drawString(margin_x + 10, curr_y - 23, "Please type directly into the shaded boxes below in Adobe Acrobat, Chrome, or Edge, and save the file.")
    
    # --- SECTION 1: STATUTORY ICAI CREDENTIALS ---
    curr_y = curr_y - inst_h - 14  # y = 702
    draw_section_bar(c, margin_x, curr_y, "1. STATUTORY ICAI PRACTICE CREDENTIALS", "ICAI Registration Records")
    
    # Row 1
    curr_y = curr_y - 20 - 15  # 15pt space below section bar -> y_label = 667
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "firm_name", "ICAI Approved Firm Name", "Exact legal name", "Daksh Desai & Associates")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "frn_number", "Firm Registration Number (FRN)", "e.g. 1XXXXXW")
    
    # Row 2
    curr_y = curr_y - (box_h + 18)  # drop by 38pt -> y_label = 629
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "proprietor_name", "Proprietor / Managing Partner Name", "With designation", "CA Daksh Desai, ACA")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "membership_no", "ICAI Membership Number (M. No.)", "6-digit ID")
    
    # Row 3
    curr_y = curr_y - (box_h + 18)  # drop by 38pt -> y_label = 591
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "est_year", "Year of Establishment", "e.g. 2024 or 2026")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "degrees", "Academic & Professional Degrees", "e.g. ACA, B.Com", "ACA, B.Com")
    
    # --- SECTION 2: OFFICIAL PRACTICE CONTACT CHANNELS ---
    curr_y = curr_y - (box_h + 24)  # drop by 44pt -> y = 527
    draw_section_bar(c, margin_x, curr_y, "2. OFFICIAL PRACTICE CONTACT CHANNELS", "Displayed on Header, Footer & Contact Desk")
    
    # Row 1
    curr_y = curr_y - 20 - 15  # y_label = 492
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "primary_phone", "Primary Direct / Mobile Number", "With WhatsApp")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "alternate_phone", "Alternate / Office Landline", "Optional")
    
    # Row 2
    curr_y = curr_y - (box_h + 18)  # y_label = 454
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "primary_email", "Statutory Practice Email", "e.g. info@domain.com")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "office_hours", "Chambers Office Working Hours", "e.g. Mon-Sat 10am-7pm", "Mon-Sat: 10:00 AM - 7:00 PM IST")
    
    # Row 3
    curr_y = curr_y - (box_h + 18)  # y_label = 416
    draw_field_clean(c, margin_x, curr_y, content_w, box_h, "chambers_address_1", "Chambers Registered Address - Line 1", "Office/Suite No., Building Name")
    
    # Row 4
    curr_y = curr_y - (box_h + 18)  # y_label = 378
    draw_field_clean(c, margin_x, curr_y, content_w, box_h, "chambers_address_2", "Chambers Registered Address - Line 2", "Street, Landmark, Area")
    
    # Row 5
    curr_y = curr_y - (box_h + 18)  # y_label = 340
    draw_field_clean(c, margin_x, curr_y, third_w, box_h, "city", "City", "", "Mumbai")
    draw_field_clean(c, margin_x + third_w + col_gap, curr_y, third_w, box_h, "pincode", "PIN Code", "e.g. 400001")
    draw_field_clean(c, margin_x + (third_w * 2) + (col_gap * 2), curr_y, third_w, box_h, "state", "State", "", "Maharashtra")
    
    c.showPage()
    
    # =========================================================================
    # PAGE 2: DIGITAL LINKS, PROFILE & VERIFICATION
    # =========================================================================
    draw_header(c, page_num=2, total_pages=2)
    
    # --- SECTION 3: DIGITAL ASSETS & WEB PRESENCE ---
    curr_y = height - 92
    draw_section_bar(c, margin_x, curr_y, "3. DIGITAL ASSETS & WEB PRESENCE", "Navigation & Professional Links")
    
    # Row 1
    curr_y = curr_y - 20 - 15  # y_label = 714
    draw_field_clean(c, margin_x, curr_y, content_w, box_h, "maps_url", "Google Maps Chamber Location Link", "Share link from Google Maps for client navigation")
    
    # Row 2
    curr_y = curr_y - (box_h + 18)  # y_label = 676
    draw_field_clean(c, margin_x, curr_y, half_w, box_h, "linkedin_personal", "Proprietor LinkedIn Profile URL", "e.g. linkedin.com/in/...")
    draw_field_clean(c, margin_x + half_w + col_gap, curr_y, half_w, box_h, "linkedin_firm", "Firm LinkedIn Page URL", "Optional")
    
    # Row 3
    curr_y = curr_y - (box_h + 18)  # y_label = 638
    draw_field_clean(c, margin_x, curr_y, content_w, box_h, "domain_url", "Official Website Domain Name", "Configured production domain", "dakshdesaiassociates.com")
    
    # --- SECTION 4: PRACTICE PROFILE & PHOTO CHECKLIST ---
    curr_y = curr_y - (box_h + 24)  # drop by 44pt -> y = 574
    draw_section_bar(c, margin_x, curr_y, "4. PROPRIETOR BIOGRAPHY & ATTACHMENTS", "Regulatory Verification")
    
    # Row 1
    curr_y = curr_y - 20 - 15  # y_label = 539
    draw_field_clean(c, margin_x, curr_y, content_w, box_h, "expertise_headline", "Primary Practice Focus Line", "e.g. Direct Tax Litigation, Corporate Audits, FEMA & GST Advisory")
    
    # Row 2 (Multiline Bio)
    curr_y = curr_y - (box_h + 18)  # y_label = 501
    draw_field_clean(c, margin_x, curr_y, content_w, 36, "proprietor_bio", "Brief Practice Experience Summary", "Optional 2-3 sentences highlighting past practice / background")
    
    # Checklist items
    curr_y = curr_y - 36 - 20  # y = 445
    c.setFillColor(colors.HexColor("#0F172A"))
    c.setFont("Helvetica-Bold", 8)
    c.drawString(margin_x, curr_y, "REQUIRED ATTACHMENT & CONFIRMATION:")
    
    # Checkbox 1: Photo
    c.acroForm.checkbox(
        name="cb_photo",
        tooltip="Passport Photograph attached",
        x=margin_x,
        y=curr_y - 18,
        size=11,
        buttonStyle='check',
        borderColor=colors.HexColor("#94A3B8"),
        fillColor=colors.HexColor("#F8FAFC"),
        textColor=colors.HexColor("#0B1528")
    )
    c.setFillColor(colors.HexColor("#1E293B"))
    c.setFont("Helvetica", 7.8)
    c.drawString(margin_x + 16, curr_y - 15, "35x45mm Passport-format Photograph (High-resolution, neutral background, formal business attire per ICAI rules)")
    
    # Checkbox 2: Consent
    c.acroForm.checkbox(
        name="cb_verified",
        tooltip="Details verified with ICAI records",
        x=margin_x,
        y=curr_y - 34,
        size=11,
        buttonStyle='check',
        borderColor=colors.HexColor("#94A3B8"),
        fillColor=colors.HexColor("#F8FAFC"),
        textColor=colors.HexColor("#0B1528")
    )
    c.drawString(margin_x + 16, curr_y - 31, "I confirm that all particulars above are authentic and accurately reflect ICAI registration records.")
    
    # --- SECTION 5: SPECIAL INSTRUCTIONS / NOTES ---
    curr_y = curr_y - 54  # y = 391
    draw_section_bar(c, margin_x, curr_y, "5. DEVELOPER NOTES & ADDITIONAL INSTRUCTIONS", "Any Special Requests")
    
    curr_y = curr_y - 20 - 15  # y_label = 356
    draw_field_clean(c, margin_x, curr_y, content_w, 40, "additional_notes", "Additional Instructions or Notes for Web Engineering Team", "Type any specific requests here...")
    
    # Bottom Confirmation Return Card
    curr_y = curr_y - 40 - 24  # y = 292
    confirm_h = 36
    c.setFillColor(colors.HexColor("#F8FAFC"))
    c.setStrokeColor(colors.HexColor("#C5A059"))
    c.setLineWidth(1)
    c.roundRect(margin_x, curr_y - confirm_h, content_w, confirm_h, 3, fill=True, stroke=True)
    
    c.setFillColor(colors.HexColor("#0B1528"))
    c.setFont("Helvetica-Bold", 7.8)
    c.drawString(margin_x + 10, curr_y - 12, "RETURN COMPLETED FORM:")
    c.setFillColor(colors.HexColor("#475569"))
    c.setFont("Helvetica", 7.2)
    c.drawString(margin_x + 10, curr_y - 22, "Save this PDF and email/WhatsApp it back along with your passport photograph.")
    c.drawString(margin_x + 10, curr_y - 31, "Your website at https://dakshdesaiassociates.com will be updated immediately upon receipt.")
    
    c.save()
    print(f"Fillable PDF successfully rebuilt at: {filename}")

if __name__ == "__main__":
    build_pdf()
