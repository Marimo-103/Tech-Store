import React from "react";
import Container from "../Components/Container";
import BreadCrumbs from "../Layers/BreadCrumbs";
import Title from "../Layers/Title";
import supp01 from "/Common Images/Support-1.png";
import supp02 from "/Common Images/Support-2.png";
import supp03 from "/Common Images/Support-3.png";

const Span = ({ text }) => {
  return <span className="font-semibold block">{text}</span>;
};

const TermsConditions = () => {
  return (
    <div>
      <section id="heading">
        <Container>
          <BreadCrumbs className="md:mt-[21px] lg:mb-[19px] md:mb-3 mt-4 mb-[10px]" />
          <Title text="Shop Terms & Conditions" />
        </Container>
      </section>

      {/* body */}
      <section id="grid" className="lg:mt-[26px] md:mt-[9px] mt-[19px]">
        <Container className="flex md:flex-row-reverse flex-col md:justify-end lg:gap-x-[30px] md:gap-x-5 gap-y-4 items-start">
          <div className="box lg:w-[327px] lg:py-[25px] lg:px-6 bg-[#F5F7FF]">
            <ul>
              <li>
                <a href="#Definitions&Interpretation">Definitions & Interpretation</a>
              </li>
            </ul>
          </div>
          <div className="text lg:w-[1039px] md:w-[441px] w-full">
            <h2 className="lg:text-2xl text-sm font-semibold lg:mb-[60px] md:mb-[26px] mb-6">
              GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES
            </h2>
            <div className="lg:text-base text-xs text-black leading-[26px] font-light">
              <section id="Definitions&Interpretation">
                <Span text="Definitions & Interpretation" />
                <br />
                <p>
                  In the following Terms and Conditions of sale, unless the
                  context requires otherwise
                </p>
                <br />
                <ul>
                  <li>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</li>
                  <li>
                    (b) "Customer" means the person or corporation placing an
                    order for the purchase of goods or services from Shop;
                  </li>
                  <li>
                    (c) "Products" means any goods, materials, equipment or
                    services provided to the Customer by Shop;
                  </li>
                  <li>
                    (d) if the Customer comprises more than one person, each of
                    those person’s liability is joint and several;
                  </li>
                  <li>
                    (e) references to a party or a person includes any form of
                    entity and their respective successors, assigns and
                    representatives;
                  </li>
                  <li>
                    (f) for all periods and times specified in clauses 5 and 11,
                    time is of the essence; and
                  </li>
                  <li>
                    (g) all references to currency are references to Australian
                    dollars.
                  </li>
                </ul>
                <br />
              </section>
              <section id="General">
                <Span text="General" />
                <br />
                <p>
                  By ordering the Products and/or accepting delivery of the
                  Products from Shop, the Customer agrees that it is bound by
                  these Terms and Conditions of sale. Customer orders, including
                  orders placed via the internet, are subject to acceptance by
                  Shop. The acceptance of the Customer's order by Shop is
                  expressly made conditional upon the Customer's assent to these
                  Terms and Conditions which will prevail notwithstanding
                  anything that may be stated to the contrary on the Customer's
                  order. Shop reserves the right to vary any of these terms at
                  any time and any subsequent orders placed by the Customer will
                  constitute an acceptance of the terms as varied. Once a
                  Customer order has been placed and accepted by Shop, the
                  Customer agrees that the Customer has no right to cancel or
                  vary the order at any time, unless agreed upon in writing by
                  both parties.
                </p>
                <br />
              </section>
              <section id="Quotations">
                <Span text="Quotations" />
                <br />
                <p>
                  Any quotation by Shop to the Customer will be open for
                  acceptance by the Customer within the period stated in the
                  quotation or, where no period is stated, within seven (7) days
                  from the date of the quotation. Thereafter, prices stated in
                  the quotation may be varied by Shop without notice to the
                  Customer.
                </p>
                <br />
              </section>
              <section id="price&taxes">
                <Span text="Prices / Taxes" />
                <br />
                <p>
                  The prices charged by and payable to Shop will be the ruling
                  prices applicable at the time of order placement, provided
                  that the Products are accepted for delivery within a
                  reasonable time. Prices are subject to change without notice.
                  Recommended retail prices are provided for indicative purposes
                  only and there is no obligation for Shop to comply with that
                  recommendation. It as agreed that should the Customer fail for
                  any reason to acquire the quantity of Products sold then
                  without limiting Shop' other rights and remedies the unit
                  price charged for the goods sold may be amended to take into
                  account any variation in the total quantity purchased by the
                  Customer. Prices include GST, but do not include any other tax
                  or duty, which is in addition to the price and is to be paid
                  by the Customer at the time of payment for the Products.
                </p>
                <br />
              </section>
              <section id="TermsofPayment">
                <Span text="Terms of Payment" />
                <br />
                <p>
                  Credit Card Payments may attract a surcharge, and Shop will
                  inform the Customer if this is to be the case before
                  processing the transaction.
                </p>
                <br />
                <p>
                  Unless otherwise agreed in writing by Shop, where Shop has not
                  agreed in writing to provide commercial credit to the
                  Customer, the total purchase price for Products supplied will
                  be due for payment in cash prior to delivery.
                </p>
                <br />
                <p>
                  Where Shop has agreed in writing to provide commercial credit
                  to the Customer, the Customer must make payments in accordance
                  with the payment terms provided by Shop.
                </p>
                <br />
                <p>
                  Where Shop has approved the provision of a commercial credit
                  arrangement with the Customer but has not provided notice of
                  the payment terms to the Customer, the Customer must pay the
                  total purchase price for Products supplied within seven days
                  of the statement date.
                </p>
                <br />
                <p>
                  Credit Card Payment at an Invoice or transaction level may
                  also be offered to the Customer as a stand-alone payment
                  method, or in conjunction with Credit Card Direct Debit
                  Authorisation.
                </p>
                <br />
              </section>
              <section id="CreditAccounts">
                <Span text="Credit Accounts" />
                <br />
                <p>
                  Any commercial credit arrangements that are provided to the
                  Customer by Shop will continue until terminated by Shop at it
                  sole discretion. In the event that Shop terminates the
                  Customer's commercial credit arrangement, the Customer will be
                  notified in writing and termination will take effect upon
                  receipt of that notification by the Customer.
                </p>
                <br />
              </section>
              <section id="ChangeofOwnership">
                <Span text="Change of Ownership" />
                <br />
                <p>
                  Trading accounts are approved by Shop based on the information
                  supplied and the representations made by the Customer. In the
                  event that there is a change in ownership of the Customer,
                  whether total or partial, the Customer must immediately
                  provide written notice to Shop informing Shop of these
                  changes. Until Shop receives written notice from the Customer
                  of a change in ownership, the Customer (including where it is
                  a company or trustee, each of the Directors thereof) holds
                  Shop indemnified against any and all losses, unpaid accounts,
                  interest, damages, costs, charges, fees and expenses incurred
                  or suffered by Shop in trading with any person, company
                  (including the same company but with a different shareholder
                  or shareholders) or other entity (including a trust) which may
                  have purchased the Customer's business or any interest in the
                  Customer's business or any of the shares in the Customer and
                  used the Customer's previously approved account for trading.
                </p>
                <br />
                <p>
                  Where a Customer has been authorised by Shop to make payments
                  through Credit Card Direct Debit, the Customer must provide
                  notice in writing at least five (5) days prior to any change
                  in ownership of the business to allow Shop sufficient time to
                  contact the new owner to obtain and confirm new Credit Card
                  information if applicable.
                </p>
                <br />
              </section>
              <section id="InformationontheProductssupplied">
                <Span text="Information on the Products supplied" />
                <br />
                <p>
                  All descriptive specifications, illustrations, drawings, data,
                  dimensions and weights furnished by Shop or otherwise
                  contained in catalogues or other advertising material are
                  approximate only and are intended to be merely a general
                  description of the goods, are not incorporated within this
                  agreement and no not form part of the description of the goods
                  sold under this or any other agreement unless otherwise agreed
                  to in writing by Shop in which case such information will be
                  subject to recognised trade tolerances.
                </p>
                <br />
              </section>
              <section id="Delivery">
                <Span text="Delivery" />
                <br />
                <p>
                  The means of delivering the Products to the Customer will be
                  at Shop' discretion. Shop reserves the right to deliver
                  Products in part deliveries. In the event that Shop incurs
                  additional costs for meeting special (i.e. Tasmania / Northern
                  Territory Deliveries) or urgent delivery arrangements, these
                  additional costs may be charged to the Customer and may
                  include the cost of airfreight where it is not the normal
                  method of delivery. The Customer agrees to accept delivery of
                  the Products sold at any time during normal business hours.
                </p>
                <br />
                <p>
                  Shop will not be liable for any loss or damage resulting from
                  any late delivery of the Products and late delivery will not
                  entitle the Customer to rescind or repudiate the Customer's
                  order for the Products.
                </p>
                <br />
              </section>
            </div>
          </div>
        </Container>
      </section>

      {/* support */}
      <section id="support" className="bg-[#F5F9FF] lg:mt-[74px] md:mt-[61px] mt-[63px]">
        <div className="support max-w-[1160px] mx-auto lg:pt-[60px] lg:pb-11 md:py-[37.5px] py-[25px] lg:px-[53px] flex md:flex-row flex-col md:justify-between justify-center items-center gap-y-5">
          <div className="child flex flex-col items-center gap-y-2 lg:w-[265px] md:w-[229px] w-[265px]">
            <div className="img w-[45px] h-[46px] lg:w-[65px] lg:h-[65px]">
              <img src={supp01} alt="" className="w-full h-full" />
            </div>
            <div className="text w-full text-center">
              <h3 className="lg:text-lg text-sm text-black font-bold leading-[140%]">
                Product Support
              </h3>
              <p className="lg:text-sm text-xs text-[#000000b3] leading-[140%] lg:mt-[13px] mt-[5px]">
                Up to 3 years on-site warranty available for your peace of mind.
              </p>
            </div>
          </div>
          <div className="child flex flex-col items-center gap-y-2 lg:w-[265px] md:w-[229px] w-[265px]">
            <div className="img w-[45px] h-[46px] lg:w-[65px] lg:h-[65px]">
              <img src={supp02} alt="" className="w-full h-full" />
            </div>
            <div className="text w-full text-center">
              <h3 className="lg:text-lg text-sm text-black font-bold leading-[140%]">
                Personal Account
              </h3>
              <p className="lg:text-sm text-xs text-[#000000b3] leading-[140%] lg:mt-[13px] mt-[5px]">
                With big discounts, free delivery and a dedicated support
                specialist.
              </p>
            </div>
          </div>
          <div className="child flex flex-col items-center gap-y-2 lg:w-[265px] md:w-[229px] w-[265px]">
            <div className="img w-[45px] h-[46px] lg:w-[65px] lg:h-[65px]">
              <img src={supp03} alt="" className="w-full h-full" />
            </div>
            <div className="text w-full text-center">
              <h3 className="lg:text-lg text-sm text-black font-bold leading-[140%]">
                Amazing Savings
              </h3>
              <p className="lg:text-sm text-xs text-[#000000b3] leading-[140%] lg:mt-[13px] mt-[5px]">
                Up to 70% off new Products, you can be sure of the best price.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
