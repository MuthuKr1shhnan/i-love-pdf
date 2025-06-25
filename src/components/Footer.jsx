export default function Footer() {
  return (
    <>
      <div className='text-center mt-16'>
        <p className='text-2xl font-medium text-gray-800'>
          Subscribe now &amp; get 20% off
        </p>
        <p className='text-gray-400 mt-3'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input
            className='w-full sm:flex-1 outline-none'
            type='email'
            placeholder='Enter your email'
            required
          />
          <button
            type='submit'
            className='bg-black text-white text-xs px-10 py-4'
          >
            SUBSCRIBE
          </button>
        </form>
      </div>

      <footer className='bg-white text-white py-4 w-full'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-8 mt-40 text-sm'>
            <div>
              <img
                src='src/assets/foreverlogo.png'
                className='mb-5 w-32'
                alt='Forever Logo'
              />
              <p className='w-full md:w-2/3 text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
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
              <p className='text-xl font-medium mb-5 text-black'>
                GET IN TOUCH
              </p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-000-000-0000</li>
                <li>greatstackdev@gmail.com</li>
                <li className='cursor-pointer'>Instagram</li>
              </ul>
            </div>
          </div>
          <div className='mt-8 border-t-[.25px] border-gray-200 pt-4 text-center text-sm text-gray-400'>
            <p className='text-sm text-center'>
              Copyright 2024@ greatstack.dev - All Right Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
