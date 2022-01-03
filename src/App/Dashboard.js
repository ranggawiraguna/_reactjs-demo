import React from 'react';
import { Frame, Container, AppLogo, Header2, DashboardContainer, DashboardCard } from './Components';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <Frame>
            <AppLogo />
            <Container id="Dashboard">
                <Header2 innerValue="List Of Contents" />
                <DashboardContainer>
                    <Link to="/Component"> <DashboardCard name="Component" /> </Link>
                    <Link to="/State"> <DashboardCard name="State" /> </Link>
                    <Link to="/Props"> <DashboardCard name="Props" /> </Link>
                    <Link to="/Manipulation-Component"> <DashboardCard name="Manipulation" /> </Link>
                    <Link to="/LifeCycle-Component"> <DashboardCard name="LifeCycle" /> </Link>
                    <Link to="/Backend-Interaction"> <DashboardCard name="Backend" /> </Link>
                    <Link to="/React-Router"> <DashboardCard name="Router" /> </Link>
                    <Link to="/State-Management"> <DashboardCard name="Management" /> </Link>
                    <Link to="/Global-API"> <DashboardCard name="API" /> </Link>
                    <Link to="/Hooks"> <DashboardCard name="Hooks" /> </Link>
                    <Link to="/Firebase"> <DashboardCard name="Firebase" /> </Link>
                    <Link to="/Example-Projects"> <DashboardCard name="Example" /> </Link>
                </DashboardContainer>
            </Container>
        </Frame>
    )
}

export default Dashboard