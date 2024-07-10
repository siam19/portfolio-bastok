import { FunctionComponent } from "react";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[122px] max-w-full text-left text-109xl text-white font-inter mq450:gap-[15px] mq825:gap-[30px] mq1400:gap-[61px] ${className}`}
    >
      <header className="self-stretch flex flex-row items-center justify-between gap-[20px] text-right text-29xl text-white font-times-new-roman mq450:hidden mq825:flex mq825:flex-col mq825:items-start mq825:justify-start">
        <a className="[text-decoration:none] relative italic text-[inherit]">
          Projects
        </a>
        <i className="w-[245px] relative inline-block shrink-0 whitespace-nowrap mq825:w-[237px]">
          Get in touch
        </i>
      </header>
      <div className="self-stretch flex flex-col items-start justify-center gap-[33px] max-w-full mq825:gap-[16px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.11em] font-light font-inherit mq450:text-13xl mq825:text-109xl mq825:flex mq825:w-[237px] mq825:flex-col mq825:items-start mq825:justify-start">
          Hey, this is Bastok
        </h1>
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-right text-29xl mq1400:flex-wrap">
          <img
            className="w-[585px] relative rounded-31xl max-h-full object-cover min-h-[666px] max-w-full mq1400:flex-1"
            loading="lazy"
            alt=""
            src="/hero-image@2x.png"
          />
          <div className="w-[677px] flex flex-col items-end justify-end gap-[26px] min-w-[677px] max-w-full mq1125:min-w-full mq1400:flex-1">
            <div className="self-stretch h-[459px] relative tracking-[-0.03em] inline-block mq450:text-10xl mq825:text-19xl">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed dictum massa. Pellentesque placerat consectetur facilisis. Donec quis egestas ante. Proin sit `}</div>
            <img
              className="w-[181px] h-[181px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/learn-more-button.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
