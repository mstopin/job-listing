import { useState, useEffect } from 'react';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

export default function ColorModeSelector({
  containerClassName: userContainerClassName,
  iconClassName: userIconClassName,
}: {
  containerClassName?: string;
  iconClassName?: string;
}) {
  const [isDark, setDark] = useState(false);
  const iconClassName = !isDark
    ? 'top-[2px] left-[5px]'
    : 'top-[2px] left-[30px]';

  useEffect(() => {
    const classList = document.querySelector('html')?.classList;
    if (!classList) {
      return;
    }

    if (!isDark) {
      classList.remove('dark');
    } else if (!classList.contains('dark')) {
      classList.add('dark');
    }
  }, [isDark]);

  return (
    <button
      className={`relative w-[60px] h-[29px] rounded-md ${
        userContainerClassName ?? ''
      }`}
      aria-label={isDark ? 'Use light theme' : 'Use dark theme'}
      onClick={() => setDark(!isDark)}
    >
      <span
        className={`absolute transition transition-all ease-in-out ${iconClassName} ${userIconClassName}`}
      >
        {!isDark && <IoMdSunny className="w-[25px] h-[25px]" />}
        {isDark && <IoMdMoon className="w-[25px] h-[25px]" />}
      </span>
    </button>
  );
}
