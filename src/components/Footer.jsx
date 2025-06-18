export default function Footer() {
  return (
    <footer className='bg-black text-white  py-8 w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <p>Phone: +1 234 567 890</p>
            <p>Email: contact@example.com</p>
            <p>Support: support@example.com</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Address</h3>
            <p>1234 Example Street</p>
            <p>Suite 567</p>
            <p>Example City, EX 12345</p>
            <p>Country</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
            <p>Twitter: @example</p>
            <p>Facebook: fb.com/example</p>
            <p>LinkedIn: linkedin.com/company/example</p>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400'>
          &copy; 2025 Example Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
