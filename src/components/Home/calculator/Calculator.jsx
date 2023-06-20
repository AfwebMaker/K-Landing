import React from "react";
//assets
import calculator from "../../../assets/images/home/calculator/calculator.png";
import { FinalCalculation } from "../../../services/LeasingCalculator/FinalCalculation";

const initialState = {
  paymentDuration: 6,
  leaseDelay: 0,
  chequeCount: 2,
  amountToLease: 0,
  chequeAmount: 0,
  blocked: 0,
  loading: false,
  possibleChequeCounts: [2, 3, 6],
  serverError: false,
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // this.range = useRef('')
    this.interval = -1;
    this.state = initialState;
  }

  async updateData() {
    if (this.state.amountToLease > 0) {
      const calculationResult = await FinalCalculation({
        leaseDelay: this.state.leaseDelay,
        chequeCount: this.state.chequeCount,
        amountToLease: parseInt(this.state.amountToLease),
        paymentDuration: this.state.paymentDuration,
      });

      this.state.chequeAmount = 0;
      this.state.blocked = 0;

      if (calculationResult.status === 200) {
        this.state.serverError = false;
        this.setState({ serverError: false });
        this.updateChequeAmount(
          calculationResult.data.data.installment.cheque.amount
        );
        this.updateBlocked(
          calculationResult.data.data.installment.blocked.amount
        );
      } else {
        this.state.serverError = true;
        this.setState({ serverError: true });
      }
    }
    this.state.loading = false;
    this.setState({ loading: false });
  }

  fetchData() {
    if (!this.state.amountToLease > 0) {
      return;
    }
    this.state.loading = true;
    this.setState({ loading: true });
    window.clearTimeout(this.interval);
    this.updateData = this.updateData.bind(this);
    this.interval = window.setTimeout(this.updateData, 1000);
  }

  updatePaymentDuration(value) {
    this.setState({ paymentDuration: value });
    this.state.paymentDuration = value;
    let possibilities;
    switch (value) {
      case 12:
        possibilities = [4, 6, 12];
        break;
      case 6:
        possibilities = [2, 3, 6];
        break;
    }

    this.state.possibleChequeCounts = possibilities;
    this.setState({ possibleChequeCounts: possibilities });

    this.updateChequeCount(possibilities[0]);

    this.fetchData();
  }

  updateLeaseDelay(value) {
    this.setState({ leaseDelay: value });
    this.state.leaseDelay = value;
    this.fetchData();
  }

  updateChequeCount(value) {
    this.setState({ chequeCount: value });
    this.state.chequeCount = value;
    this.fetchData();
  }

  updateAmountToLease(value) {
    this.setState({ amountToLease: value });
    this.state.amountToLease = value;
    this.fetchData();
  }

  getSortedPossibilities() {
    return this.state.possibleChequeCounts.sort((a, b) => a - b);
  }

  updateChequeAmount(value) {
    this.setState({ chequeAmount: value });
    this.state.chequeAmount = value;
  }

  updateBlocked(value) {
    this.setState({ blocked: value });
    this.state.blocked = value;
  }

  leftClass() {
    const index =
      this.state.possibleChequeCounts.length -
      this.getSortedPossibilities().indexOf(this.state.chequeCount) -
      1;
    if (index < 1) return "left-0";
    return "left-" + index + "/" + this.state.possibleChequeCounts.length;
  }

  render() {
    return (
      <div className="relative mt-10 h-[600px] md:h-0 md:pb-[46.15384%] xl:pb-0 xl:h-[600px]  text-center m-auto flex items-center justify-center">
        <div className="absolute maxHeightCalculator w-full h-full inset-0 maxLayout m-auto  px-[20px] md:px-[32px] flex flex-col items-center justify-center">
          <div className="bg-white md:bg-[#EBEFED] w-full h-full rounded-xl flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-1/2 md:h-full px-0  md:p-[2%] lg:p-[3%] flex flex-col items-center md:items-start justify-center md:justify-around">
              <div className="flex items-start justify-center flex-col w-full">
                <span className="text-color-3 text-xl lg:text-2xl font-bold mb-4 text-center md:text-right w-full">
                  طرح مالی کارگشا (لیزینگ)
                </span>
                <span className="flex text-xs lg:text-base pl-[6%] w-full text-center md:text-right font-light leading-5">
                  در طرح مالی کارگشا، کارفرمایان می توانند با توجه به شرایط
                  پرداخت خود، طبق قوانین و مقررات حاکم بر صنعت تسهیلات، هزینه
                  اجرای پروژه خود را تامین کنند.
                </span>
              </div>
              <div className="hidden md:flex">
                <img className="" src={calculator} alt="ماشین حساب" />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:h-full flex items-center justify-center md:justify-end mt-10 md:mt-0 md:p-[1%]">
              <div className="w-full h-[350px] max-w-md md:max-w-lg md:h-full bg-[#EBEFED] shadow-lg md:bg-white rounded-lg flex items-center justify-center flex-col">
                <div className="w-full h-[80%] px-[4%] relative flex flex-col justify-around text-[10px] lg:text-sm">
                  <div className="w-full flex items-center justify-between h-[15%]">
                    <span className="text-color-font-3">دوره پرداخت</span>
                    <div className="relative w-[35%] text-color-font-2 h-[60%] rounded-lg bg-white md:bg-color-1 flex items-center justify-center md:text-sm text-xs">
                      <span
                        onClick={() => this.updatePaymentDuration(6)}
                        className={`text-[10px] lg:text-sm w-1/2 h-full z-10 fcc cursor-pointer ${
                          this.state.paymentDuration === 6
                            ? "text-white"
                            : "text-color-font-2"
                        }`}
                      >
                        شش ماه
                      </span>
                      <span
                        onClick={() => this.updatePaymentDuration(12)}
                        className={`text-[10px] lg:text-sm w-1/2 h-full z-10 fcc cursor-pointer ${
                          this.state.paymentDuration === 12
                            ? "text-white"
                            : "text-color-font-2"
                        }`}
                      >
                        یکساله
                      </span>
                      <div
                        className={`transition-all h-full w-1/2 bg-color-font-5 absolute rounded-lg ${
                          this.state.paymentDuration === 12
                            ? "left-0"
                            : "left-[50%]"
                        } `}
                      ></div>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between h-[15%]">
                    <span className="text-color-font-3">نوع پرداخت</span>
                    <div className="relative w-[35%] text-color-font-2 h-[60%] rounded-lg bg-white md:bg-color-1  flex items-center justify-center lg:text-sm text-xs">
                      <span
                        onClick={() => this.updateLeaseDelay(0)}
                        className={`text-[10px] lg:text-sm w-1/2 h-full z-10 fcc cursor-pointer ${
                          this.state.leaseDelay === 0
                            ? "text-white"
                            : "text-color-font-2"
                        }`}
                      >
                        آنی
                      </span>
                      <span
                        onClick={() => this.updateLeaseDelay(1)}
                        className={`text-[10px] lg:text-sm w-1/2 h-full z-10 fcc cursor-pointer ${
                          this.state.leaseDelay === 1
                            ? "text-white"
                            : "text-color-font-2"
                        }`}
                      >
                        سه ماهه
                      </span>
                      <div
                        className={`transition-all h-full w-1/2 bg-color-font-5 absolute rounded-lg ${
                          this.state.leaseDelay === 1 ? "left-0" : "left-[50%]"
                        } `}
                      ></div>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between h-[15%]">
                    <span className="text-color-font-3">
                      تعداد پرداخت ها (فقره)
                    </span>
                    <div className="relative w-[52.5%] text-color-font-2 h-[60%] rounded-lg bg-white md:bg-color-1  flex items-center justify-center">
                      {this.getSortedPossibilities().map((item, index) => {
                        return (
                          <span
                            key={index}
                            onClick={() => this.updateChequeCount(item)}
                            className={`text-[10px] lg:text-sm w-1/3 h-full z-10 fcc cursor-pointer ${
                              this.state.chequeCount === item
                                ? "text-white"
                                : "text-color-font-2"
                            }`}
                          >
                            {new Intl.NumberFormat("fa").format(item)} فقره
                          </span>
                        );
                      })}
                      <div
                        className={`transition-all h-full w-1/3 bg-color-font-5 absolute rounded-lg ${this.leftClass()}`}
                      ></div>
                    </div>
                  </div>
                  <div
                    className={`w-full flex flex-col items-start justify-start ${
                      this.state.serverError ? "justify-start" : ""
                    } h-[40%]`}
                  >
                    <span className="text-color-font-3 flex w-full mb-5">
                      مبلغ در خواستی:
                    </span>
                    {/* <div style={{direction: 'ltr'}} className='relative w-full h-[30%] fcc'>*/}
                    {/*    <input value={this.state.amountToLease} onChange={(e) => {*/}
                    {/*        this.updateAmountToLease(e.target.value)*/}
                    {/*    }} className='cursor-pointer z-10 slider w-full absolute' min={0}*/}
                    {/*           max={200000000} type="range"/>*/}

                    {/*    <div style={{left: `${this.state.rangeValue}%`}}*/}
                    {/*         className='absolute left-0 top-[-10px] text-[10px] font-light text-color-2 w-auto whitespace-nowrap'>*/}
                    {/*        {28300} تومان*/}
                    {/*    </div>*/}
                    {/*</div> */}
                    <div className="relative w-full h-[30%]">
                      <input
                        type={"number"}
                        className="focus:outline-none w-full h-full rounded-lg bg-[#DCDDDE] pr-[4%]"
                        value={
                          this.state.amountToLease === 0
                            ? ""
                            : this.state.amountToLease
                        }
                        onChange={(e) =>
                          this.updateAmountToLease(e.target.value)
                        }
                        placeholder="به طور مثال ۲۳,۹۸۰,۰۰۰"
                        // type="text"
                      />
                      <div className="text-white w-[20%] h-full absolute left-0 bg-color-font-5 fcc top-0 rounded-lg cursor-default">
                        تومان
                      </div>
                    </div>
                    <div
                      hidden={!this.state.serverError || !this.state.amountToLease}
                      className="text-red-700 text-right mt-2"
                      role="alert"
                    >
                      {/*<strong className="font-bold">Holy smokes!</strong>*/}
                      <span className="flex bg-red-100 rounded text-[10px] md:text-xs">
                        متاسفانه خطایی در ارتباط با سرور وجود داشته
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`relative w-full h-[20%] text-color-font-3 flex flex-col justify-around py-[2%] px-[4%] border-t-2 border-dashed border-t-color-2 text-[10px] md:text-[1.2vw] lg:text-sm`}
                >
                  <div
                    hidden={!this.state.loading}
                    className={`absolute right-0 left-0 place-item-center`}
                  >
                    <div
                      className={`object-center inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  </div>
                  <div className={`${this.state.loading ? "blur-sm" : ""}`}>
                    <div className="flex justify-between items-center">
                      <span>کمیسیون لیزینگ :</span>
                      <span>
                        {new Intl.NumberFormat("fa").format(this.state.blocked)}{" "}
                        تومان
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-[70%]">
                      <span>مبلغ برای هر فقره چک :</span>
                      <span>
                        {new Intl.NumberFormat("fa").format(
                          this.state.chequeAmount
                        )}{" "}
                        تومان
                      </span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white md:bg-[#EBEFED] absolute top-[-17px] right-[-16px]"></div>
                  <div className="w-8 h-8 rounded-full bg-white md:bg-[#EBEFED] absolute top-[-17px] left-[-16px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
