import FAQ from "./FAQ";

const MarketingSolution = () => {
  return (
    <div className="section_padding_bottom section_padding_top">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="lg:w-[50%] w-full">
            <FAQ />
          </div>
          <div className="lg:w-[50%] w-full">
            <p className="fs-16">
              Since 2012, we've worked with many international clients and
              well-established brands. We specialize in customization to your
              precise needs, designing captivating websites, and building apps
              that set you apart. Over the past decade, we have established a
              strong track record of serving a diverse clientele, including
              prominent international clients and well-established brands. Our
              core expertise lies in giving the best solutions that meet the
              client's requirements. Our approach is anchored in customization,
              ensuring that the solutions we design and deliver align seamlessly
              with your brand identity and business objectives. As a result of
              the extensive experience gained, we solve our client's problems
              with effective technologies.lorem55
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSolution;
