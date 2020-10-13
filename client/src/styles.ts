import styled, { createGlobalStyle } from 'styled-components'
// import normalize from 'normalize.css'
export const Button = styled.button`
display: block; 
  padding: 10px; 
  border: none;
  border-radius: 5px; 
  font-size: 18px; 
  color: #fff;
  background-color: #0077cc;
  cursor: pointer;
  :hover{
    opacity: 0.8rem;
  }
  :active{
    background-color: #005fa3;
  }
`
// Add normalize as a parameter
// ${
//     normalize
// }

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
box-sizing: border-box; 

}
body, html{
height: 100%;
margin: 0;
}
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #fff;
  line-height: 1.4;
}
a:link, a:visited{
  color: #0077cc;

}
a:hover, a.focus{
  color: #004499;
}
code, pre{
  max-width: 100%;
}
`

export const Wrapper = styled.div`
@media (min-width: 700px){
display: flex; 
  top:64px;
position: relative;
height: calc(100% - 64px); 
width: 100%;
flex: auto; 
flex-direction: column;]
}
`

export const Main = styled.main`

  position: fixed;
  height: calc(100% -185px); 
  width: 100%;
  padding: 1em;
  overflow: scroll;
  @media(min-width: 700px){
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }

`

export const HeaderBar = styled.header`
width: 100%;
  padding: .5rem 1rem;
display: flex;
height: 64px;
position: fixed;
align-items: center;
background-color: #fff;
box-shadow: 0 0 5px 0 rgba(0,0,0, 0.25);
z-index: 1;
`

export const LogoText = styled.h1`
  margin: 0; 
  padding: 0;
  display: inline;
`

export const Nav = styled.nav`
  padding: 1rem;
  background: #f5f4f0;
  @media (max-width:  700px) {
  padding-top: 64px;   
  }
  @media (min-width: 700px ){
      position: fixed;
      width: 220px;
      height: calc(100% - 64px);
      overflow-y: scroll;
  }
`
export const NavList = styled.ul`
  margin: 0;
  padding:0;
list-style: none;
line-height: 2;
a{
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  color: #333; 
}
a:visited{
  color: #333;
}
a:hover, a:focus{
color: #0077cc;
}
`
// Keep the notes from extending more that 800px
export const StyledNote = styled.article`
max-width: 800px;
margin: 0 auto;
`

// Style the note metadata
export const MetaData = styled.div`
@media (min-width: 500px){
    display: flex;
    align-items: top;
}
`
// Add spacebetween the avatar and meta info
export const MetaInfo = styled.div`
padding-right: 1em;
`

// Align Useractions  to the right on a large screen 
export const UserActions = styled.div`
margin-left: auto; 
`
// NoteFeed
export const NoteWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-bottom: 1px solid #f5f4f0; 
`
// Sign up 
export const SignUpWrapper = styled.div`
    border: 1px solid #f5f4f0; 
    max-width: 500px; 
    padding: 1em ; 
    margin: 0 auto;
`

export const Form = styled.form`
label, input{
    width: 100%; 
    margin-bottom: 1em; 
    display: block;
    line-height: 2em;
}
`
export const FormWrapper = styled.form`
 label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
  }
`

// HeaderBar
export const UserState = styled.div`
margin-left: auto;
`
export const ButtonAsLink = styled.button`
background: none;
    color:#0077cc;
    border: none;
    padding: 0; 
    font: inherit;
    text-decoration: underline;
    cursor: pointer;

    :hover, :active{
color: #004499;
    }
`