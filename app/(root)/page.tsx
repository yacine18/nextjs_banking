import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Yassine",
    lastName: "Hilali",
    email: "hilali.yacin@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="header-content">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            account={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1250 }, { currentBalance: 150 }]}
      />
    </section>
  );
};

export default Home;
