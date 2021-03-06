// @flow

import * as React from "react";

import { Page, Grid, GalleryCard, Form } from "tabler-react";

import SiteWrapper from "../SiteWrapper";


const json = {
  "items": [
    {
      "imageURL": "demo/photos/logo.png",
      "avatarURL": "demo/faces/male/41.jpg",
      "fullName": "Nathan Guerrero",
      "dateString": "12 days ago",
      "totalView": 112,
      "totalLike": 42
    },
    {
      "imageURL": "demo/photos/ilnur-kalimullin-218996-500.jpg",
      "avatarURL": "demo/faces/female/1.jpg",
      "fullName": "Alice Mason",
      "dateString": "12 days ago",
      "totalView": 70,
      "totalLike": 0
    },
    {
      "imageURL": "demo/photos/jakob-owens-224352-500.jpg",
      "avatarURL": "demo/faces/female/18.jpg",
      "fullName": "Rose Bradley",
      "dateString": "4 days ago",
      "totalView": 166,
      "totalLike": 96
    },
    {
      "imageURL": "demo/photos/jeremy-bishop-330225-500.jpg",
      "avatarURL": "demo/faces/male/16.jpg",
      "fullName": "Peter Richards",
      "dateString": "18 days ago",
      "totalView": 76,
      "totalLike": 6
    },
    {
      "imageURL": "demo/photos/jonatan-pie-226191-500.jpg",
      "avatarURL": "demo/faces/male/26.jpg",
      "fullName": "Wayne Holland",
      "dateString": "16 days ago",
      "totalView": 106,
      "totalLike": 36
    },
    {
      "imageURL": "demo/photos/josh-calabrese-66153-500.jpg",
      "avatarURL": "demo/faces/female/7.jpg",
      "fullName": "Michelle Ross",
      "dateString": "4 days ago",
      "totalView": 77,
      "totalLike": 7
    },
    {
      "imageURL": "demo/photos/joshua-earle-157231-500.jpg",
      "avatarURL": "demo/faces/female/17.jpg",
      "fullName": "Debra Beck",
      "dateString": "6 days ago",
      "totalView": 150,
      "totalLike": 80
    },
    {
      "imageURL": "demo/photos/mahkeo-222765-500.jpg",
      "avatarURL": "demo/faces/male/30.jpg",
      "fullName": "Phillip Peters",
      "dateString": "17 days ago",
      "totalView": 153,
      "totalLike": 83
    },
    {
      "imageURL": "demo/photos/matt-barrett-339981-500.jpg",
      "avatarURL": "demo/faces/male/32.jpg",
      "fullName": "Jack Ruiz",
      "dateString": "15 days ago",
      "totalView": 143,
      "totalLike": 73
    },
    {
      "imageURL": "demo/photos/nathan-anderson-297460-500.jpg",
      "avatarURL": "demo/faces/male/9.jpg",
      "fullName": "Ronald Bradley",
      "dateString": "11 days ago",
      "totalView": 149,
      "totalLike": 79
    },
    {
      "imageURL": "demo/photos/nathan-anderson-316188-500.jpg",
      "avatarURL": "demo/faces/female/8.jpg",
      "fullName": "Kathleen Harper",
      "dateString": "16 days ago",
      "totalView": 164,
      "totalLike": 94
    },
    {
      "imageURL": "demo/photos/nathan-dumlao-287713-500.jpg",
      "avatarURL": "demo/faces/male/4.jpg",
      "fullName": "Bobby Knight",
      "dateString": "6 days ago",
      "totalView": 160,
      "totalLike": 90
    }
  ]
};

function Gallery(): React.Node {
  const options = (
    <React.Fragment>
      <Form.Select className="w-auto mr-2">
        <option value="asc">Newest</option>
        <option value="desc">Oldest</option>
      </Form.Select>
      <Form.Input icon="search" placeholder="Search photo" />
    </React.Fragment>
  );
  return (
    <SiteWrapper>
      <Page.Content>
        <Page.Header
          title="Gallery"
          subTitle="1 - 12 of 1713 photos"
          options={options}
        />

        <Grid.Row className="row-cards">
          {json.items.map((item, key) => (
            <Grid.Col sm={6} lg={4} key={key}>
              <GalleryCard>
                <GalleryCard.Image
                  src={item.imageURL}
                  alt={`Photo by ${item.fullName}`}
                />
                <GalleryCard.Footer>
                  <GalleryCard.Details
                    avatarURL={item.avatarURL}
                    fullName={item.fullName}
                    dateString={item.dateString}
                  />
                  <GalleryCard.IconGroup>
                    <GalleryCard.IconItem name="eye" label={item.totalView} />
                    <GalleryCard.IconItem
                      name="heart"
                      label={item.totalLike}
                      right
                    />
                  </GalleryCard.IconGroup>
                </GalleryCard.Footer>
              </GalleryCard>
            </Grid.Col>
          ))}
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Gallery;
