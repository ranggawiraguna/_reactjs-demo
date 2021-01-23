import React from 'react';
import { Frame, Container, Header2 } from '../../__initial/Components';
import SearchBox from './Components/SearchBox/SearchBox';
import CardThumbnail from './Components/CardThumbnail/CardThumbnail';

function Props() {
    return (
        <Frame>
            <Container id="Props">
                <Header2 innerValue="Props" />
                <hr />
                <SearchBox />
                <br />
                <div style={{ width: "100%", display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "space-around" }}>
                    <CardThumbnail
                        coverImage="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGNvZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        coverTime="08:20"
                        title="Example Title - 1"
                        description="123 ditonton - 1 hari yang lalu" />
                    <CardThumbnail
                        coverImage="https://images.unsplash.com/photo-1502951682449-e5b93545d46e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGNvZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        coverTime="11:33"
                        title="Example Title - 2"
                        description="192 ditonton - 1 hari yang lalu" />
                    <CardThumbnail
                        coverImage="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        coverTime="15:21"
                        title="Example Title - 3"
                        description="201 ditonton - 1 hari yang lalu" />
                    <CardThumbnail
                        coverImage="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        coverTime="21:54"
                        title="Example Title - 4"
                        description="112 ditonton - 1 hari yang lalu" />
                    <CardThumbnail
                        coverImage="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        coverTime="13:27"
                        title="Example Title - 5"
                        description="392 ditonton - 1 hari yang lalu" />
                    <CardThumbnail
                        coverImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        coverTime="07:46"
                        title="Example Title - 6"
                        description="493 ditonton - 1 hari yang lalu" />
                    <CardThumbnail
                        coverImage="https://images.unsplash.com/photo-1536148935331-408321065b18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        coverTime="17:11"
                        title="Example Title - 7"
                        description="982 ditonton - 1 hari yang lalu" />
                    <CardThumbnail />
                </div>
            </Container>
        </Frame>
    )
}

export default Props