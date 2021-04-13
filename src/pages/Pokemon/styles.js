import styled from 'styled-components/native';

export const Name = styled.Text`
    margin-top: 20px;
    text-transform: capitalize;
    font-size: 18px;
    font-weight: bold;
`;

export const Title = styled.Text`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
`;

export const Picture = styled.Image`
    width: 150px;
    height: 150px;
`;

export const Container = styled.ScrollView`
    height: 100%;
`;

export const Pictures = styled.View`
    flex-direction: row;
`;

export const Type = styled.Text`
    margin-top: 5px;
    font-size: 14px;
    text-transform: capitalize;
`;

export const Stat = styled.Text`
    margin-top: 5px;
    font-size: 14px;
    text-transform: uppercase;
`;