# Soft-Tutor-Minds Website

A modern React website for Soft-Tutor-Minds IT education platform offering home tuition and pay-after-placement online training.

## Form Integration Setup

To connect the forms to your email (softtutorminds.com), you need to set up Formspree:

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Forms
Create three separate forms in your Formspree dashboard:

1. **Contact Form** - for general inquiries
2. **Enrollment Form** - for student enrollments
3. **Careers Form** - for tutor applications

### Step 3: Get Form IDs
After creating each form, you'll get a unique form ID that looks like: `xpzgkqyw`

### Step 4: Update Form URLs
Replace the placeholder form IDs in the following files:

**src/pages/Contact.jsx** (Line 32):
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```
Replace `YOUR_FORM_ID` with your contact form ID.

**src/pages/Enroll.jsx** (Line 42):
```javascript
const response = await fetch('https://formspree.io/f/YOUR_ENROLLMENT_FORM_ID', {
```
Replace `YOUR_ENROLLMENT_FORM_ID` with your enrollment form ID.

**src/pages/Careers.jsx** (Line 42):
```javascript
const response = await fetch('https://formspree.io/f/YOUR_CAREERS_FORM_ID', {
```
Replace `YOUR_CAREERS_FORM_ID` with your careers form ID.

### Step 5: Configure Email Settings
In your Formspree dashboard for each form:
1. Set the "Reply-To" field to use the submitter's email
2. Configure email notifications to go to your desired email addresses
3. Set up custom email templates if needed

### Alternative: EmailJS Setup
If you prefer EmailJS instead of Formspree:

1. Create account at [emailjs.com](https://emailjs.com)
2. Set up email service (Gmail, Outlook, etc.)
3. Create email templates
4. Replace Formspree code with EmailJS implementation

### Form Features Included:
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Responsive design
- ✅ Professional styling
- ✅ Email integration ready

### Email Addresses Used:
- `info@softtutorminds.com` - General contact
- `careers@softtutorminds.com` - Tutor applications
- `support@softtutorminds.com` - Support inquiries

Make sure these email addresses are set up and working before configuring the forms.