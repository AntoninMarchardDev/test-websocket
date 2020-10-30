import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const KpiContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const KPIContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

export const KPITitle = styled.div`
  font-size: 30px;
  font-weigth: 400;
`;

export const KPIValue = styled.div`
  font-size: 60px;
  font-weigth: 600;
  color: ${({ color }) => color};
`;
