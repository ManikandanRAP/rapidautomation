import styled from 'styled-components';

const ContactFromWrapper = styled.div`
  background-color: #f3f6f9;
  padding: 10%;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: 16px;
    padding: 15px;
  }
  input,
  select {
    margin: 8px 0;
    width: 49%;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 4px;
    outline: none;
  }
  select {
    padding: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
  .input_full_width {
    width: 100%;
  }
  .messagebox {
    margin: 8px 0;
    margin-bottom: 20px;
    min-height: 100px;
    font-family: inherit;
    border-radius: 4px;
    border: 1px solid rgb(235, 235, 235);
  }

  .form_fields {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media only screen and (max-width: 575px) {
    input,
    select {
      width: 100%;
    }
  }
`;

export default ContactFromWrapper;
