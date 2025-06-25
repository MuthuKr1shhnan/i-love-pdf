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
              <p className='text-xl font-medium mb-5 text-black'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>

            <div>
              <p class='text-xl font-medium mb-5  text-black'>GET IN TOUCH</p>
              <ul class='flex flex-col gap-1 text-gray-600'>
                <li>+1-000-000-0000</li>
                <li>greatstackdev@gmail.com</li>
                <li class='cursor-pointer'>Instagram</li>
              </ul>
            </div>
          </div>
          <div className='mt-8 border-t-[.25px] border-gray-200 pt-4 text-center text-sm text-gray-400'>
            <p class=' text-sm text-center'>
              Copyright 2024@ greatstack.dev - All Right Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
