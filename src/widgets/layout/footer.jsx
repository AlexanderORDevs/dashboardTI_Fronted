import { Typography } from '@material-tailwind/react';

export function Footer({}) {
  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; All Right Reserved 2025
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
