import styled from "styled-components";

const ChatBoxContainer = styled.div`
    background-color: #3c3744;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const MessageBox = styled.div`
    flex-grow: 1;
`;
export default function ChatBox(props) {
    return (
        <ChatBoxContainer>
            <MessageBox></MessageBox>
            <InputBox />
        </ChatBoxContainer>
    );
}

const InputBoxContainer = styled.form`
    background-color: #776d88;
    height: auto;
    display: flex;
    padding: 8px;
`;

const Input = styled.input`
    flex-grow: 1;
    border-radius: 4px;
    border-width: 1px;
    margin-right: 8px;
`;

const Button = styled.button`
    height: 100%;
    border-radius: 4px;
    border-width: 1px;
`;

export function InputBox(props) {
    return (
        <InputBoxContainer>
            <Input type="text" />
            <Button type="submit">Send</Button>
        </InputBoxContainer>
    );
}
