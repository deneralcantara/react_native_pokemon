import styled from 'styled-components/native';

export const Name = styled.Text`
    margin-top: 20px;
    text-transform: capitalize;
    font-size: 11px;
    font-weight: bold;
`;

export const Picture = styled.Image`
    width: 90px;
    height: 90px;
`;

export const Container = styled.TouchableOpacity`
    align-items: center;
`;

export const ButtonPaginate = styled.TouchableOpacity`
    margin-left: ${props => `${props.marginLeft}`};
    margin-right: ${props => `${props.marginRight}`};
    background-color: #0275d8;
    margin-top: 15px;
    border-radius: 10px;
    height: 40px;
`;

export const ButtonTextPaginate = styled.Text`
    margin-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    color: #FFF;
`;