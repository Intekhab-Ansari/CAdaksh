"""
Script to generate an executive, interactive fillable PDF form
for collecting client launch data for Daksh Desai & Associates.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfgen import canvas

def draw_header(c, page_num, total_pages=2):
    width, height = A4
    
    # Top Navy Banner
    c.setFillColor(colors.HexColor("#0B1528"))
    c.rect(0, height - 85, width, 85, fill=True, stroke=False)
    
    # Gold accent line
    c.setFillColor(colors.HexColor("#C5A059"))
    c.rect(0, height - 88, width, 3, fill=True, stroke=False)
    
    # Title Text in Banner
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 17)
    c.drawString(36, height - 38, "DAKSH DESAI & ASSOCIATES")
    
    c.setFillColor(colors.HexColor("#C5A059"))
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(36, height - 52, "CHARTERED ACCOUNTANTS * MUMBAI * ICAI REGISTERED PRACTICE")
    
    c.setFillColor(colors.HexColor("#E2E8F0"))
    c.setFont("Helvetica", 9)
    c.drawRightString(width - 36, height - 38, "WEBSITE LAUNCH DATA FORM")
    c.setFillColor(colors.HexColor("#94A3B8"))
    c.setFont("Helvetica-Oblique", 7.5)
    c.drawRightString(width - 36, height - 52, "Interactive Fillable PDF - Complete & Save")
    
    # Footer
    c.setStrokeColor(colors.HexColor("#E2E8F0"))
    c.setLineWidth(0.8)
    c.line(36, 42, width - 36, 42)
    
    c.setFillColor(colors.HexColor("#64748B"))
    c.setFont("Helvetica", 7.5)
    c.drawString(36, 30, "Daksh Desai & Associates - Strictly Compliant with ICAI Website Guidelines & Code of Ethics")
    c.drawRightString(width - 36, 30, f"Page {page_num} of {total_pages}")


def draw_section_header(c, x, y, title, subtitle=None):
    width, height = A4
    box_w = width - (x * 2)
    
    # Header bar
    c.setFillColor(colors.HexColor("#112540"))
    c.rect(x, y - 22, box_w, 22, fill=True, stroke=False)
    
    # Gold marker
    c.setFillColor(colors.HexColor("#C5A059"))
    c.rect(x, y - 22, 4, 22, fill=True, stroke=False)
    
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawString(x + 12, y - 15, title)
    
    if subtitle:
        c.setFillColor(colors.HexColor("#CBD5E1"))
        c.setFont("Helvetica-Oblique", 7.5)
        c.drawRightString(x + box_w - 10, y - 15, subtitle)


def draw_field(c, x, y, w, h, field_name, label, hint="", default="", is_multiline=False):
    # Field Label
    c.setFillColor(colors.HexColor("#0F172A"))
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(x, y + h + 4, label)
    
    # Optional hint
    if hint:
        c.setFillColor(colors.HexColor("#64748B"))
        c.setFont("Helvetica", 7)
        c.drawString(x + c.stringWidth(label, "Helvetica-Bold", 8.5) + 6, y + h + 4, f"({hint})")
    
    # AcroForm Interactive Text Field
    c.acroForm.textfield(
        name=field_name,
        tooltip=label,
        x=x,
        y=y,
        width=w,
        height=h,
        value=default,
        borderColor=colors.HexColor("#94A3B8"),
        fillColor=colors.HexColor("#F8FAFC"),
        textColor=colors.HexColor("#0B1528"),
        fontSize=9,
        borderStyle='solid',
        borderWidth=1
    )


def build_pdf(filename="Daksh_Desai_Website_Data_Form.pdf"):
    width, height = A4
    c = canvas.Canvas(filename, pagesize=A4)
    c.setTitle("Daksh Desai & Associates - Website Launch Data Form")
    c.setAuthor("Daksh Desai & Associates")
    c.setSubject("Client Onboarding & Practice Launch Form")
    
    margin_x = 36
    content_w = width - (margin_x * 2)
    
    # =========================================================================
    # PAGE 1: STATUTORY CREDENTIALS & CONTACT CHANNELS
    # =========================================================================
    draw_header(c, page_num=1, total_pages=2)
    
    # Instructions Box
    curr_y = height - 102
    c.setFillColor(colors.HexColor("#F1F5F9"))
    c.setStrokeColor(colors.HexColor("#CBD5E1"))
    c.setLineWidth(0.8)
    c.roundRect(margin_x, curr_y - 36, content_w, 36, 4, fill=True, stroke=True)
    
    c.setFillColor(colors.HexColor("#0F172A"))
    c.setFont("Helvetica-Bold", 8)
    c.drawString(margin_x + 12, curr_y - 14, "INSTRUCTIONS FOR CA DAKSH DESAI:")
    c.setFillColor(colors.HexColor("#334155"))
    c.setFont("Helvetica", 7.8)
    c.drawString(margin_x + 12, curr_y - 26, "Please type your details directly into the shaded boxes below in Adobe Acrobat, Chrome, or Edge, and click Save.")
    c.drawString(margin_x + 12, curr_y - 35, "All entries are used exclusively to populate your official, ICAI-compliant practice portal.")
    
    # SECTION 1: STATUTORY ICAI CREDENTIALS
    curr_y = curr_y - 60
    draw_section_header(c, margin_x, curr_y, "1. STATUTORY ICAI PRACTICE CREDENTIALS", "ICAI Registration Particulars")
    
    curr_y = curr_y - 32
    col_gap = 14
    half_w = (content_w - col_gap) / 2
    
    draw_field(c, margin_x, curr_y - 18, half_w, 20, "firm_name", "ICAI Approved Firm Name", "Exact legal spelling", "Daksh Desai & Associates")
    draw_field(c, margin_x + half_w + col_gap, curr_y - 18, half_w, 20, "frn_number", "Firm Registration Number (FRN)", "Issued by ICAI, e.g. 1XXXXXW")
    
    curr_y = curr_y - 48
    draw_field(c, margin_x, curr_y - 18, half_w, 20, "proprietor_name", "Proprietor / Managing Partner Name", "Full name with designation", "CA Daksh Desai, ACA")
    draw_field(c, margin_x + half_w + col_gap, curr_y - 18, half_w, 20, "membership_no", "ICAI Membership Number (M. No.)", "6-digit member ID")
    
    curr_y = curr_y - 48
    draw_field(c, margin_x, curr_y - 18, half_w, 20, "est_year", "Year of Establishment", "e.g. 2024 or 2026")
    draw_field(c, margin_x + half_w + col_gap, curr_y - 18, half_w, 20, "degrees", "Academic & Professional Degrees", "e.g. ACA, B.Com, LLB", "ACA, B.Com")
    
    # SECTION 2: OFFICIAL PRACTICE CONTACT CHANNELS
    curr_y = curr_y - 58
    draw_section_header(c, margin_x, curr_y, "2. OFFICIAL PRACTICE CONTACT CHANNELS", "Displayed on Header, Footer & Contact Desk")
    
    curr_y = curr_y - 32
    draw_field(c, margin_x, curr_y - 18, half_w, 20, "primary_phone", "Primary Direct / Mobile Number", "With WhatsApp capability, e.g. +91 98XXX XXXXX")
    draw_field(c, margin_x + half_w + col_gap, curr_y - 18, half_w, 20, "alternate_phone", "Alternate / Office Landline (Optional)", "e.g. 022-XXXXXXXX")
    
    curr_y = curr_y - 48
    draw_field(c, margin_x, curr_y - 18, half_w, 20, "primary_email", "Statutory Practice Email", "For inquiries, e.g. info@cadakshdesaiassociates.com")
    draw_field(c, margin_x + half_w + col_gap, curr_y - 18, half_w, 20, "office_hours", "Chambers Office Working Hours", "e.g. Mon-Sat: 10:00 AM - 7:00 PM IST", "Mon-Sat: 10:00 AM - 7:00 PM IST")
    
    curr_y = curr_y - 48
    draw_field(c, margin_x, curr_y - 18, content_w, 20, "chambers_address_1", "Chambers Registered Address - Line 1", "Office / Suite No., Building Name")
    
    curr_y = curr_y - 42
    draw_field(c, margin_x, curr_y - 18, content_w, 20, "chambers_address_2", "Chambers Registered Address - Line 2", "Street, Landmark, Area")
    
    curr_y = curr_y - 42
    third_w = (content_w - (col_gap * 2)) / 3
    draw_field(c, margin_x, curr_y - 18, third_w, 20, "city", "City", "", "Mumbai")
    draw_field(c, margin_x + third_w + col_gap, curr_y - 18, third_w, 20, "pincode", "PIN Code", "e.g. 400001")
    draw_field(c, margin_x + (third_w * 2) + (col_gap * 2), curr_y - 18, third_w, 20, "state", "State", "", "Maharashtra")
    
    c.showPage()
    
    # =========================================================================
    # PAGE 2: DIGITAL LINKS, PROFILE & VERIFICATION
    # =========================================================================
    draw_header(c, page_num=2, total_pages=2)
    
    # SECTION 3: DIGITAL ASSETS & WEB PRESENCE
    curr_y = height - 105
    draw_section_header(c, margin_x, curr_y, "3. DIGITAL ASSETS & WEB PRESENCE", "Navigation & Professional Links")
    
    curr_y = curr_y - 32
    draw_field(c, margin_x, curr_y - 18, content_w, 20, "maps_url", "Google Maps Chamber Location Link", "Share link from Google Maps so clients can navigate directly")
    
    curr_y = curr_y - 48
    draw_field(c, margin_x, curr_y - 18, half_w, 20, "linkedin_personal", "Proprietor LinkedIn Profile URL", "e.g. linkedin.com/in/daksh-desai")
    draw_field(c, margin_x + half_w + col_gap, curr_y - 18, half_w, 20, "linkedin_firm", "Firm LinkedIn Page URL (Optional)", "e.g. linkedin.com/company/daksh-desai-associates")
    
    curr_y = curr_y - 48
    draw_field(c, margin_x, curr_y - 18, content_w, 20, "domain_url", "Official Website Domain Name", "Configured production domain", "dakshdesaiassociates.com")
    
    # SECTION 4: PRACTICE PROFILE & PHOTO CHECKLIST
    curr_y = curr_y - 58
    draw_section_header(c, margin_x, curr_y, "4. PROPRIETOR BIOGRAPHY & ATTACHMENTS", "Regulatory Verification")
    
    curr_y = curr_y - 32
    draw_field(c, margin_x, curr_y - 18, content_w, 20, "expertise_headline", "Primary Practice Focus Line", "e.g. Direct Tax Litigation, Corporate Audits, FEMA & GST Advisory")
    
    curr_y = curr_y - 48
    draw_field(c, margin_x, curr_y - 40, content_w, 42, "proprietor_bio", "Brief Practice Experience Summary (Optional)", "A few sentences highlighting past practice / Big 4 / litigation background")
    
    # Checkbox items
    curr_y = curr_y - 75
    c.setFillColor(colors.HexColor("#0F172A"))
    c.setFont("Helvetica-Bold", 8.5)
    c.drawString(margin_x, curr_y, "REQUIRED ATTACHMENT CHECKLIST:")
    
    # Checkbox 1: Passport photo
    c.acroForm.checkbox(
        name="cb_photo",
        tooltip="Passport Photograph attached",
        x=margin_x,
        y=curr_y - 20,
        size=12,
        buttonStyle='check',
        borderColor=colors.HexColor("#94A3B8"),
        fillColor=colors.HexColor("#F8FAFC"),
        textColor=colors.HexColor("#0B1528")
    )
    c.setFillColor(colors.HexColor("#1E293B"))
    c.setFont("Helvetica", 8)
    c.drawString(margin_x + 18, curr_y - 17, "35x45mm Passport-format Photograph (High-resolution, neutral background, sober business attire as mandated by ICAI)")
    
    # Checkbox 2: Consent
    c.acroForm.checkbox(
        name="cb_verified",
        tooltip="Details verified with ICAI records",
        x=margin_x,
        y=curr_y - 38,
        size=12,
        buttonStyle='check',
        borderColor=colors.HexColor("#94A3B8"),
        fillColor=colors.HexColor("#F8FAFC"),
        textColor=colors.HexColor("#0B1528")
    )
    c.drawString(margin_x + 18, curr_y - 35, "I confirm that all particulars above are authentic and accurately reflect ICAI registration records.")
    
    # SECTION 5: SPECIAL INSTRUCTIONS / NOTES
    curr_y = curr_y - 60
    draw_section_header(c, margin_x, curr_y, "5. DEVELOPER NOTES & ADDITIONAL INSTRUCTIONS", "Any Special Requests")
    
    curr_y = curr_y - 32
    draw_field(c, margin_x, curr_y - 42, content_w, 44, "additional_notes", "Additional Instructions or Notes for Web Engineering Team", "Type any specific requests, preferred email routing, or custom changes here...")
    
    # Bottom Confirmation Box
    curr_y = curr_y - 72
    c.setFillColor(colors.HexColor("#F8FAFC"))
    c.setStrokeColor(colors.HexColor("#C5A059"))
    c.setLineWidth(1)
    c.roundRect(margin_x, curr_y - 36, content_w, 36, 4, fill=True, stroke=True)
    
    c.setFillColor(colors.HexColor("#0B1528"))
    c.setFont("Helvetica-Bold", 8)
    c.drawString(margin_x + 12, curr_y - 14, "RETURN COMPLETED FORM:")
    c.setFillColor(colors.HexColor("#475569"))
    c.setFont("Helvetica", 7.8)
    c.drawString(margin_x + 12, curr_y - 25, "Save this PDF and email/WhatsApp it back to your web development team along with your passport photograph.")
    c.drawString(margin_x + 12, curr_y - 34, "Your website at https://dakshdesaiassociates.com will be updated immediately upon receipt.")
    
    c.save()
    print(f"Fillable PDF successfully created at: {filename}")

if __name__ == "__main__":
    build_pdf()
