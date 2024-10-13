import { useState, useEffect } from "react";
import supabase from "../../supabase";

function BalanceSheet() {
    const [assets, setAssets] = useState<number | undefined>()
    const [liabilities, setLiabilities] = useState<number | undefined>()
    const [equity, setEquity] = useState<number | undefined>()

    useEffect(() => {
        getTransaction();
    }, []);

    async function getTransaction() {
        const { data: assetsRes } = await supabase.from('transaction').select('amount.sum()').gte('amount', 0);;
        // console.log(assets)
        if (assetsRes) {setAssets(+assetsRes[0].sum);}
        const { data: liabilitiesRes } = await supabase.from('transaction').select('amount.sum()').lte('amount', 0);
        // console.log(liabilities)
        if (liabilitiesRes) {setLiabilities(+liabilitiesRes[0].sum);}
        const { data: equityRes } = await supabase.from('transaction').select('amount.sum()');
        // console.log(equity)
        if (equityRes) {setEquity(+equityRes[0].sum);}
    }

    return (
        <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Assets</div>
          <div className="stat-value">{assets}</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>
      
        <div className="stat place-items-center">
          <div className="stat-title">Liabilities</div>
          <div className="stat-value">{liabilities}</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
      
        <div className="stat place-items-center">
          <div className="stat-title">Net Assets (Equity)</div>
          <div className="stat-value">{equity}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
      </div>
    );
}

export default BalanceSheet