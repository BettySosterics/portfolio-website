import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100 gap-5">
          © 2023 Betty Sosterics
          <div className="text-sm">
            {' '}
            (design by{''}
            <a
              href="https://github.com/hqasmei/tailwindcss-and-nextjs-portfolio"
              rel="noreferrer"
              target="_blank"
            >
              {' '}
              Hosna Qasmei
            </a>{' '}
            ❤️)
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://github.com/bettysosterics"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          {/* <a
            href="https://twitter.com/hqasmei"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a> */}

          <a
            href="https://www.linkedin.com/in/betty-sosterics/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          {/* <a
            href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a> */}
        </div>
      </div>
    </footer>
  );
}
