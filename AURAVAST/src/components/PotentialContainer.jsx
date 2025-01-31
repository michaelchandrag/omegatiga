import PropTypes from "prop-types";
import Usecase from "./Usecase";

const PotentialContainer = ({ className = "" }) => {

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[76px] box-border max-w-full text-center text-xl text-color-white-solid font-raleway mq450:pb-8 mq450:box-border mq1050:pb-[49px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 bg-[url('/section-background@2x.png')] bg-cover bg-no-repeat bg-fixed bg-center overflow-hidden flex flex-col items-center justify-center py-[111px] px-0 box-border relative gap-2.5 max-w-full mq750:pt-[72px] mq750:pb-[72px] mq750:box-border">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-16 max-w-full z-[1] mq450:gap-4 mq1050:gap-8">
          <div
            className="w-[723px] flex flex-col items-center justify-start gap-2 max-w-full"
          >
            <h3
              className="m-0 self-stretch relative text-inherit leading-[25px] font-semibold font-poppins mq450:text-base mq450:leading-[20px]"
            >
              POTENTIAL USECASE
            </h3>
            <div
              className="relative text-base leading-[25px] font-poppins"
            >
              Comprehensive AI-driven solutions to mitigate risks across protocols, trades, liquidity pools, wallets, and multi-chain operations.
            </div>
          </div>
          <div 
            className="flex flex-col items-start justify-start gap-8 max-w-full font-ibm-plex-mono mq450:gap-4"
          >
            {[
              {
                description:
                  "Simplify complex DeFi strategies and maximize rewards with automated AI-powered portfolio management.",
                title: "DeFi Enthusiasts",
                usecaseCount: "1",
              },
              {
                description:
                  "Harness advanced analytics and private execution environments to optimize large-scale financial operations.",
                title: "Institutional Investors",
                usecaseCount: "2",
              },
              {
                description:
                  "Streamline governance participation with AI-driven insights and automation tools.",
                title: "DAO Members",
                usecaseCount: "3",
              },
              {
                description:
                  "Execute seamless multi-chain asset movements while optimizing for gas fees and liquidity",
                title: "Cross-Chain Traders",
                usecaseCount: "4",
              },
              {
                description:
                  "Experience the ease of entry into DeFi with Auravast’s intuitive, AI-guided interfaces.",
                title: "Crypto Newcomers",
                usecaseCount: "5",
              },
            ].map((usecase) => (
              <div
                key={usecase.usecaseCount}
              >
                <Usecase
                  description={usecase.description}
                  title={usecase.title}
                  usecaseCount={usecase.usecaseCount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

PotentialContainer.propTypes = {
  className: PropTypes.string,
};

export default PotentialContainer;
