import React, { useEffect, useState } from "react";
import ContainerExample from "../Components/ContainerExample/ContainerExample";
import ListCard from "../Components/ListCard/ListCard";
import Navbar from "../Components/Navbar/Navbar";
import CardProduct from "../Components/CardProduct/CardProduct";
import { Frame, Container, Header2 } from "../../../App/Components";

function SideEffectHooks() {
  const data = [
    {
      brandIcon:
        "https://pbs.twimg.com/profile_images/788646900220190720/bWLw5gxJ_400x400.jpg",
      brandName: "Popculine",
      image:
        "https://popculine.com/wp-content/uploads/2020/10/1-WBB-B-THIS-LIFE-IS-A-TRIP-min-840x840.jpg",
      articleName: "Windbreaker – This Life Is A Trip",
      price: "310.000",
    },
    {
      brandIcon:
        "https://pbs.twimg.com/profile_images/788646900220190720/bWLw5gxJ_400x400.jpg",
      brandName: "Popculine",
      image:
        "https://popculine.com/wp-content/uploads/2020/10/PH-1-WIT-AND-JOY-min-840x840.jpg",
      articleName: "Pullover Hoodie – Wit and joy",
      price: "320.000",
    },
    {
      brandIcon:
        "https://pbs.twimg.com/profile_images/788646900220190720/bWLw5gxJ_400x400.jpg",
      brandName: "Popculine",
      image:
        "https://popculine.com/wp-content/uploads/2020/10/BASEBALL-CAP-1-DO-FUN-SHIT-min-840x840.jpg",
      articleName: "Headwear – Do Fun Shit",
      price: "120.000",
    },
    {
      brandIcon:
        "https://pbs.twimg.com/profile_images/788646900220190720/bWLw5gxJ_400x400.jpg",
      brandName: "Popculine",
      image:
        "https://popculine.com/wp-content/uploads/2020/10/1-WAISTBAG-PRODUCTIVE-min-840x840.jpg",
      articleName: "Waistwords Bag – Productive Without Pressure",
      price: "150.000",
    },
  ];

  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // Lifecycle : ComponentDidMount or ComponentDidUpdate
    document.title = "Hooks(" + totalCount + ")";

    return () => {
      // Lifecycle : ComponentWillUnmount
      document.title = "React App";
    };
  });

  return (
    <Frame>
      <Container id="Hooks">
        <Header2 innerValue="React Hooks (Side-Effect)" />
        <hr />
        <ContainerExample>
          <Navbar />
          <ListCard>
            {data.map((e) => (
              <CardProduct
                brandIcon={e.brandIcon}
                brandName={e.brandName}
                image={e.image}
                articleName={e.articleName}
                price={e.price}
                setTotalCount={(type) =>
                  setTotalCount(
                    type === "INCREMENT" ? totalCount + 1 : totalCount - 1
                  )
                }
                resetTotalCount={(value) => setTotalCount(totalCount - value)}
              />
            ))}
          </ListCard>
        </ContainerExample>
      </Container>
    </Frame>
  );
}

export default SideEffectHooks;
