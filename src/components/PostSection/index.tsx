import React from "react";

import { PostSection, SectionContainer, Post, PostImage, PostButton } from "./styles";

export default function index() {
  return (
    <PostSection>
      <SectionContainer maxWidth="xl">
        <Post>
          <PostImage />
          <h4>Titulo do post</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <PostButton>Mostrar mais</PostButton>
        </Post>
        <Post>
          <PostImage />
          <h4>Titulo do post</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <PostButton>Mostrar mais</PostButton>
        </Post>

        <Post>
          <PostImage />
          <h4>Titulo do post</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <PostButton>Mostrar mais</PostButton>
        </Post>

        <Post>
          <PostImage />
          <h4>Titulo do post</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <PostButton>Mostrar mais</PostButton>
        </Post>

        <Post>
          <PostImage />
          <h4>Titulo do post</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <PostButton>Mostrar mais</PostButton>
        </Post>
      </SectionContainer>
    </PostSection>
  );
}
