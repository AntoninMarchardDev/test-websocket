import React, { useState, useEffect } from 'react';

import {
  MainContainer,
  KpiContainer,
  KPIContent,
  KPITitle,
  KPIValue
} from './elements';

function displayColor(value) {
  if (value > 0) {
    return 'hsl(89,53%,52%)';
  } else if (value === 0) {
    return '#000';
  } else {
    return 'hsl(6,78%,57%)';
  }
}


function App({ ws }) {
  const [socketState, setSocketState] = useState(null);
  const [totalOpenOrdersKPI, setTotalOpenOrdersKPI] = useState(0);
  const [availableFundcashKPI, setAvailableFundcashKPI] = useState(0);
  const [totalClosedOrdersKPI, setTotalClosedOrdersKPI] = useState(0);
  const [totalNumberOfCoversOnClosedOrderKPI, setTotalNumberOfCoversOnClosedOrderKPI] = useState(0);
  const [totalNumberOfCoversOnOpenOrdersKPI, setTotalNumberOfCoversOnOpenOrdersKPI] = useState(0);
  const [totalTaxIncludedOnClosedOrdersKPI, setTotalTaxIncludedOnClosedOrdersKPI] = useState(0);
  const [totalTaxIncludedOnOpenOrdersKPI, setTotalTaxIncludedOnOpenOrdersKPI] = useState(0);

  useEffect(() => {
    ws.onopen = () => {
      ws.send(JSON.stringify({
        action: 'subscribe',
        subject: 'hot_kpi',
        storeId: '2945',
        deviceUUID: 'db505bc5-eeac-413e-8123-93602ef8b5eb',
        source: 'sonar'
      }));
    };
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);
      if (res.data.TotalOpenOrdersKPI) {
        setTotalOpenOrdersKPI(res.data.TotalOpenOrdersKPI);
      }
      if (res.data.AvailableFundcashKPI) {
        setAvailableFundcashKPI(res.data.AvailableFundcashKPI);
      }
      if (res.data.TotalClosedOrdersKPI) {
        setTotalClosedOrdersKPI(res.data.TotalClosedOrdersKPI);
      }
      if (res.data.TotalNumberOfCoversOnClosedOrderKPI) {
        setTotalNumberOfCoversOnClosedOrderKPI(res.data.TotalNumberOfCoversOnClosedOrderKPI);
      }
      if (res.data.TotalNumberOfCoversOnOpenOrdersKPI) {
        setTotalNumberOfCoversOnOpenOrdersKPI(res.data.TotalNumberOfCoversOnOpenOrdersKPI);
      }
      if (res.data.TotalTaxIncludedOnClosedOrdersKPI) {
        setTotalTaxIncludedOnClosedOrdersKPI(res.data.TotalTaxIncludedOnClosedOrdersKPI);
      }
      if (res.data.TotalTaxIncludedOnOpenOrdersKPI) {
        setTotalTaxIncludedOnOpenOrdersKPI(res.data.TotalTaxIncludedOnOpenOrdersKPI);
      }
    }

    ws.onclose = () => {
      console.log('closed');
    }

    ws.onerror = err => {
      console.log(err);
    }
  });

  return (
    <MainContainer>
      {socketState && {socketState}}
      <KpiContainer>
       <KPIContent>
        <KPIValue color={displayColor(totalOpenOrdersKPI)}>
          {totalOpenOrdersKPI}
        </KPIValue>
        <KPITitle>
           Total open orders
        </KPITitle>
       </KPIContent>
      </KpiContainer>
      <KpiContainer>
       <KPIContent>
        <KPIValue color={displayColor(totalClosedOrdersKPI)}>
          {totalClosedOrdersKPI}
        </KPIValue>
        <KPITitle>
           Total Closed Orders
        </KPITitle>
       </KPIContent>
      </KpiContainer>
      <KpiContainer>
       <KPIContent>
        <KPIValue color={displayColor(availableFundcashKPI)}>
          {Number(availableFundcashKPI) / 100} €
        </KPIValue>
        <KPITitle>
           Available fund cash
        </KPITitle>
       </KPIContent>
      </KpiContainer>
      <KpiContainer>
       <KPIContent>
        <KPIValue color={displayColor(totalNumberOfCoversOnClosedOrderKPI)}>
          {totalNumberOfCoversOnClosedOrderKPI}
        </KPIValue>
        <KPITitle>
           Total number of covers on Closed orders
        </KPITitle>
       </KPIContent>
      </KpiContainer>
      <KpiContainer>
       <KPIContent>
        <KPIValue color={displayColor(totalNumberOfCoversOnOpenOrdersKPI)}>
          {totalNumberOfCoversOnOpenOrdersKPI}
        </KPIValue>
        <KPITitle>
           Total number of covers on Open orders
        </KPITitle>
       </KPIContent>
      </KpiContainer>
      <KpiContainer>
       <KPIContent>
        <KPIValue color={displayColor(totalTaxIncludedOnClosedOrdersKPI)}>
          {Number(totalTaxIncludedOnClosedOrdersKPI) / 100} €
        </KPIValue>
        <KPITitle>
           Total tax incl closed order
        </KPITitle>
       </KPIContent>
      </KpiContainer>
      <KpiContainer>
       <KPIContent>
        <KPIValue color={displayColor(totalTaxIncludedOnOpenOrdersKPI)}>
          {Number(totalTaxIncludedOnOpenOrdersKPI) / 100} €
        </KPIValue>
        <KPITitle>
           Total tax incl open order
        </KPITitle>
       </KPIContent>
      </KpiContainer>
    </MainContainer>
  );
}

export default App;
