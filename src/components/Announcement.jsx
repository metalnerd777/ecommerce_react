import styled from "styled-components";

const Container = styled.div`
  height: 30%;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Super Deal of the Day!, Free Shipping on all orders over $50
    </Container>
  );
};

export default Announcement;
