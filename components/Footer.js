const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#clip0_192_823)"
    >
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
    </g>
    <defs>
      <clipPath id="clip0_192_823">
        <path
          className="fill-current text-white"
          d="M0 0H24V24H0z"
          transform="translate(.5)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="stroke-current text-gray-400 dark:text-white"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    ></path>
  </svg>
);

const ThemeSwitcher = () => {
  return (
    <div className="flex mt-6 bg-white justify-center dark:bg-gray-900 rounded-3xl p-1">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }}
        className="flex items-center h-full pr-2 dark:bg-primary rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
      >
        {moonIcon}
      </button>

      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }}
        className="flex items-center h-full pr-2 bg-primary dark:bg-transparent rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
      >
        {sunIcon}
      </button>
    </div>
  );
};

export default function Footer({ copyrightText }) {
  return (
    <footer className="py-16 flex flex-col items-center">
      <div className="flex flex-col px-8 py-0  md:px-8 md:pt-4 md:flex-row justify-center items-center">
        <a href="https://www.linkedin.com/in/kenrric-garcia/" target="_blank" rel="noreferrer"  className="px-3 py-3 mb-4 text-center text-gray-200 transition-colors duration-500 ease-in-out rounded-lg md:mr-4 md:ml-0 text-md md:text-md md:p-3">
          <i className="devicon-linkedin-plain" aria-label="Linkedin">LinkedIn</i>
        </a>
        <a href="https://twitter.com/createdbyken" target="_blank"  rel="noreferrer" className="px-3 py-3 mb-4 text-center text-gray-200 transition-colors duration-500 ease-in-out rounded-lg md:mr-4 md:ml-0 text-md md:text-md md:p-3">
          <i className="devicon-twitter-original" aria-label="Twitter">Twitter</i>
        </a>
        <a href="https://www.instagram.com/createdby.ken/" className="px-3 py-3 mb-4 text-center text-gray-200  transition-colors duration-500 ease-in-out  rounded-lg md:mr-4 md:ml-0 text-md md:text-md md:p-3" target="_blank" rel="noreferrer" >
          <i className="devicon-instagram-original" aria-label="Instagram">Instagram</i>
        </a>
      </div>
      <ThemeSwitcher />
    </footer>
  );
}
