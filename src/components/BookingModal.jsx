import React, { useEffect, useRef, useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  safari: 'Maasai Mara Classic',
  date: '',
  guests: 2,
  message: ''
};

const BookingModal = ({ open, onClose }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => dialogRef.current?.focus(), 50);
      setSuccess(false);
      setSubmitting(false);
    } else {
      setForm(initialState);
      setErrors({});
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Full name is required';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) err.email = 'Valid email required';
    if (!form.phone.trim()) err.phone = 'Phone number is required';
    if (!form.date) err.date = 'Preferred start date is required';
    if (!form.guests || form.guests < 1) err.guests = 'At least 1 guest required';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === 'guests' ? Number(value) : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // Simulate server submission delay
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSuccess(true);

    // Optionally open mail client with the booking summary (uncomment to enable)
    // const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSafari: ${form.safari}\nDate: ${form.date}\nGuests: ${form.guests}\nMessage: ${form.message}`);
    // window.location.href = `mailto:info@liontracksafaris.com?subject=${encodeURIComponent('New Booking Request')}&body=${body}`;
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true"></div>

      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold">Book Your Safari</h3>
              <p className="text-sm text-gray-500">Quick booking form — we'll confirm availability shortly.</p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">✕</button>
          </div>

          <div className="mt-4">
            {success ? (
              <div className="p-6 bg-green-50 rounded-lg text-green-800">
                <h4 className="font-semibold">Thanks — booking requested</h4>
                <p className="mt-2">We've received your request. Our team will contact you at <strong>{form.email}</strong> with details.</p>
                <div className="mt-4 text-right">
                  <button onClick={onClose} className="bg-safari-navy text-white px-4 py-2 rounded-full">Close</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Full name</label>
                  <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md" />
                  {errors.name && <div className="text-xs text-red-500 mt-1">{errors.name}</div>}
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md" />
                  {errors.email && <div className="text-xs text-red-500 mt-1">{errors.email}</div>}
                </div>

                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md" />
                  {errors.phone && <div className="text-xs text-red-500 mt-1">{errors.phone}</div>}
                </div>

                <div>
                  <label className="text-sm font-medium">Safari</label>
                  <select name="safari" value={form.safari} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md">
                    <option>Maasai Mara Classic</option>
                    <option>Amboseli Elephant</option>
                    <option>Serengeti Migration</option>
                    <option>Ngorongoro Crater</option>
                    <option>Custom Safari Experience</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Preferred start date</label>
                  <input name="date" type="date" value={form.date} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md" />
                  {errors.date && <div className="text-xs text-red-500 mt-1">{errors.date}</div>}
                </div>

                <div>
                  <label className="text-sm font-medium">Guests</label>
                  <input name="guests" type="number" min={1} value={form.guests} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md" />
                  {errors.guests && <div className="text-xs text-red-500 mt-1">{errors.guests}</div>}
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Message (optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 w-full px-3 py-2 border rounded-md" />
                </div>

                <div className="md:col-span-2 flex items-center justify-between mt-2">
                  <div className="text-sm text-gray-500">By submitting you agree to be contacted about your booking.</div>
                  <div>
                    <button type="button" onClick={onClose} className="mr-3 px-4 py-2 rounded-md border">Cancel</button>
                    <button type="submit" disabled={submitting} className="bg-safari-orange text-white px-4 py-2 rounded-full">
                      {submitting ? 'Requesting...' : 'Request Booking'}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
