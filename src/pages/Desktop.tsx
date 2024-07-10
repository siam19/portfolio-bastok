import { FunctionComponent } from "react";
import Main from "../components/Main";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-end pt-[60px] pb-[433px] pr-[45px] pl-[61px] box-border gap-[175px] leading-[normal] tracking-[normal] mq450:gap-[44px] mq825:gap-[87px] mq825:pl-[30px] mq825:pr-[22px] mq825:box-border">
      <Main />
      <section className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-left text-29xl text-white font-inter mq1125:flex-wrap">
        <div className="w-[58px] relative tracking-[-4px] font-light inline-block [transform:_rotate(-90deg)] mq450:text-10xl mq825:text-19xl">
          PORTFOLIO
        </div>
        <img
          className="w-[728px] relative rounded-[56px] max-h-full object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/rectangle-1@2x.png"
        />
      </section>
    </div>
  );
};

export default Desktop;
