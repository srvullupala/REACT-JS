import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 
            'url(data:image/png;base64,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) center / cover'}}
            >React Project #1
            </CardTitle>
            <CardText>
              React app calling Rest API and loading a form on web page.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '170px', 
            background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8juPkAtPkAtfkAsvlPw/r0+//d8v7u+f78///X8P7p9v75/f/m9v7N7P12zvuP1vtkyfqk3fxaxvo3vfnC6P0/v/qq3/yE0vsouvnF6f3P7f255f3i9P7b8f6w4fyX2Pxzy/vXTmBZAAATUUlEQVR4nO1da6OyLLNegpaV5SEzLUv7/3/yjQEVFRBUqmfv+/q0VicZGGaGOfH39w//oImN38Pu2+NZGVXs4D4cL9l8e1Tr4VQg7IyAcfLtga2FxB2TB0Bx73O33HOy+Hr80jDn4yojsE9iRRcaYxTfvjfYOdi6lCVTj0fmAN+ihlF3Z9SxLyp+do8e6/AcR/fea2egJPcHHw0qSlJA//X6GxXjcP+ZIRuhzNy3jHyzWVF1Lz7IEqKr4ONb3L2TI7p4GKF2IbPytzSKHzkdn6FzO7jkTQeOhV8hbzln8teBElgfg83l3Mpd5ETDlf8eTrHbYzOcNiSG79fRSfilDXyF/JXDX0yIHru5wij/iQ0ZJGkz728uo3+2y0a2ITqIv5iS98gPAL9e2td3Vdb+YPGwPv4pbEOM2yl/nQ7PCP51mbzxyOAlC5GR77wX+0q+kfbe2octjV/m1L3XbZuipoM5FORfj35Ah0KylngojDZJQZk1szd6DUSNNsfuueOyJxkaouylQeGdfBwH4/dv6YB9P48QNVIv79laMRGgOfypQSH36SFATXrrDtoECdNiaTVYgBMsIojTaQp98mF3K/wEvIe+thM3QCCK7+O3snZnTVL4V6vW6UWUzdfsVBCaWPj4TjpOryGRS6iUPAMMhkrypnWkMnus0XBE0U9R6JSEEwrZM75K4dFtTBIBwEqJ/UtUTFEIqqKWPeSrXLp/Tz4OJW8+6B6lylJJoaOSJWDYfU3SEIEpEfJ/7NDUEDBBocQy/2PGOS+FHrfy9pw9ZEPAMkkNjgt3onUlFKbMHJJY5m8Aj3fbsE4RQfEpexwGJ9Zjf3Rw5LCIs/AqOehVuVe8GRmn4rffRg1YO81/W6czgC0Jn01Zh3nSqj9yMJJuxL/ERW4aVvuJ6fZPSSwdLmF1HLF/7vz5DEWy7yyAH7rg6USN9N7DDMso2NQngalpBNgHiNmDJ2oCY3aSQVIJMBv39pDkII+OvbNc7CBqnQDMEHyzaV5HBRXQUu6ZiZL3CeICBDg4k6SbaDF2oCqoMmQEvuAfag+vTCLzjGGm4RwgkVouArN0xWdSa4cR2GiVy/okUrc1zqr7KWLMSkgklgubVwvoNgElEHVPusB4kFSPGqNG3Ob2M9ys4tbm4YYKsvpvtIIEt/FLSxChnoAO0pZEYlfbCrC8qEuruN2RYMHoi/i8yqPoSR7V7QsBXcU3o1bYURwMFiFo/JMYC5drRRIpgS6/Us0qXqnysGP7+3Wnn0Rbbr8WiTFdwf4RdUdJZMp3HVYZI2hpFIqzrXhxTUFDJu7Q39UwKggge3ZwkKuE5pM+f5mNesYSPmSM+rZv7Dqln+/nIJlCOtIxLIngMCkqUup0FZH9SHXuyvnwsdShSh0VWHxCepOIi09E+VSCrJb7WrUQgjdNFlgPUm/p6WExyPFjiawp1Dyw+X4IE1zG853iB7tnhzUA7rD5lvFd5U37DYDtP/+8f1d6034BYNcsOL8dld60HwC1ahbYxTuLVuca2IrtLRNQbSF1GH4ZzC5dJCgeKo3/bTACF5r9NJNH7vb9ItYhkMarV1jFYF/V4dlLiQlRFKkXh3W1X+T9YASuEAH3FpO4rfKU+O77KUWYuO3O9X2m3bfWChIsInF3CQvUp60H/KbyOmMt11tBAkrinL14i5EoOXhIpZtVhmfoNVeQYN4q+lEv9xlDQhh+70JgUNRbWYxDk3M0Db86HIE7iBkZjNB/3u5cLtoMEvevLpXvTVB6jq63R5Ogv/Mf+0v9yrgVxu5ZGkQcAwaEW02/D2GfY1RoKv/Kg0nO6naD0IAu0s7A3nYplBil0UWy04J7csZd1pinbV9u6E8Db3Npfr20TznuRZf7+GJH+Bs2YftD3P2Cl0xMy+byageocFcMsHfZgB457oLNDp/2KUXFf4Ek6v41iaCOpjiImhGjotZa9aBi6X8GXjOIM+Cc5xWkJ37uqNn7TjvMDah9V4+HTkVDX2ZgET9h25ocYzwYZbuLvWp/YwbYxH5m5MXRi2NW+GKt9eA2l+9s6KM6hEhzDtnnuUwIHNL0jCPkDqjn6QonyhD4scx4aa81v9vGiZrNOJQ+zY7q1yaiyZUu0LC4cm4Lhz/Vd4m6enK0YqH2QpaltiqIsxqjuMeU4VRAk2ZNci/4tcPS6DUeyTgUhZ9xwfkIOfUgg5zm7ipEYi+7g6Ekgk7DUcCqXrBjLeo9RClglYmA5oHLXuawD91pttvQLYji7zqJ1ZmOveyOHqatf7/o1zF9DVz+huzdWX4dn8ntj3GoFNJVIphYYQU2oIic4gdKB4/inUYxO+0goFl66U9U8MRyL/hzduoIPcxkXw9EAfr5jD1MaksZXr9E4CgntUMwbfGIQbPMil8hkOYVi4xM6RsTYFmRv1MpSHPDBbLGMzugtb9HLTUrudfhPNEF222cFAoFMNjcooRkDWlByDIgXM8xcW/ioCAk4ZkHxCvkCH9uFRArd0aCriTsqa4tkMEHW81WIBz4PzU2skhJkuAwBGto7GIF/4a+D84QxbzjdCY2PiHfV5qWLgF4dexZ22lz/I5N/MW04EygvOBsaBhtzLT9G7PQUOhgN9TVRn4olQxgd5vl+IOYsaMoAG1dFPE2RTomxT1WVVqxIpdIf1cVM5bdBByFjkazl6BqquYlof1947w6a+YmUE1h0ZjxnB6Q0sN17LzfkqLI1lVGfkqrtwgsoY3qnAYDColYlU3+jWs2kcmN6xPnBZ7uLQJFD8imwX0eUkjCN6IIWMIN3FPrz4RrSZFVapPJk8ms1RCPCMSoFk1p3DatyKdDgPxyK4PIvbIrO4jxgEB0Fu96VkOTJnocdYzYllULL6JYV6voEOPVpxA7Mgbc9COmGihhj6tD9/AJuxlhfQpVuho6qBgZd4Hc2cFwn+2Y00fIU6jMmK/FxvYIm0ODatJnszCxUws8heqjK8z32W+G7wv34yNPIXwPwJPbEPw9lvPYeQrVh+wdLcvohn9OhjOyC0eZL0q+3n6ASVlzJUenNCZ1hqN3+lPiZ0P6JlynycIqAC0AhRhf/a5VivKjg/Hze2iXjj/QtlITIrYvSalCcl+sCFD9tF6CRUMit82oakVFry2e8sAPZ3vbXvwaoxRCvNMc88x6Hf1oooXbygl6qigMkpLU/RTWQu3W9I+t6eMCWvXaGmUgs6ZTbTiUH8niL1ubsJiSC+PvQuei5gfMJT9o2A+2jSHbyHDbQwyK7UTfnOXgiR8MhyaaNguHC8dmD3NnMBSSfzBUcTIv/tlyNV974/ov6O0kay9kAxvX2MDgHcDmFG4+XvJFptQ1+sYyCo+zHORLADrf6Li9jEJliygrCI1F2zIKJfEriyDqySyGt4xCkMSWD4d9XMVRTwVWoLA2+cZSlMYKcRmF5ccpNOea/xqXmu/8/5qkMS/YXUbh5wuEP03h5/WheZrBMgoX1vnPwG2RpDkY22AQ9P+k5T1DevN8RktijMJk0HT0k5lsFXee1UPCu6whTmbEAmAIt3nyHyDVvBetw/vnIGlPGhoWIeS8Co/QbgQKkBu6MQLIeW19rDvqXjyXew7KCt2kZZr7GVnpQzkA+Gf1CiAf9/2pBkc5t3EvTZICB1eVRdJ4FcoMmVrE85BOOdu6aGp7e0HPfViPXcbKGjCfeBWyqhD1AbOB3WS0b5TV8P58r6Cmcod+ffW+ph9hc2Hf6badVMDj0Ew6qBh6xIi7bsqZ0j58eNZuMB9QTrn1N0P6RKrFr6LwRUH2tcrKufdyCD7gVsynlMWhv80mFQvYAFJfWr8w0fmEcQMJlaowt3E7JJgHYWhpdy2GUsm+W9GfjMca+wBiiQA5RIIWEPbdiuWky3uSjfvYhrCGor3qjdXKB45R8eT4J9mYR8lqx8WTloxItO/OAG3oKuUZ1Odr2cd+3SXBiTXsYxgRt2/SlJPa8EnrV+NyKiy95UqbRzW2LfL+ZXj2b7o5S/ZMhyvL2kAoVvVJ2cTdxVSeyhI7OfwyWjdpaPGubL4BvZv3pHnvbWN+7L4mAsIb7hcnnr0CalVZKMUxyfheKrXwQ35jZTq1Ro7FtSNRneiyAvSKdw8Jd7mWULyzVkKZ5kGhEzi2M6OqSXXfwL82RIpK1OCIiBUp0iPkbBltJ50Uk3KGw6ZibQHGmgPOV2YOQiZwLJs0tCLAIDkJdMt4SjZzKgs28Qc8w+ZGhbhW9D6vOO8tcCzHoOoZ9VhkUkYm0Nx42TFzrSYOgS40HRhk+wzdTHx+jRlyqybNeY53PRcF/bfz80dsqkNabmbq6YK89pFhA7ltv9aM1UfmEr65UnD0srJjxrcAVohrahVKrLyj/RIYY+TzSlRl1w2K+gt9F1R1G4cpLzIrj97cssLA1gK7ocM41dqT6hdnjtiyB3rWmeovNwa9CFxonY1u4vsqaFMfzT54PHJ5xRlMmu0yGF2wpj7mNm93P6gAJBbxI230aeewOV10lTel0Sb1450taz9qD/Tea5zNMJeEN2C3yAQHqyBJ3U/rkD3110439alGglF6Azb7wkiTUPei9eIYwTDeBE4+9UD6CvYZ7KUOw+0GLo7W+62/OW/LOZp6R3A67cFmvSG5UwQ1SRXx/ojrWNc0hXSEhroEPsILNeqDVtFhjSts2uyD7Np8eNIX09y0fXle4l6MUFeovXcyei1Jr2FhEZ2rDWlJBCUS52QNTpm6p2D3gC6bgbRyxhLvnAC0YHBOXyCKbUYJdHWsbfawdpwejbhMqZhXL7QETA7HbC0nVcBibyid5ej3WQNUvQah9HrE0BvWvk6ONOrCLkxQ+QbKt4m9odjYNgqa4Cs6a4luSL54C/5t3mv97kynFT3PNCmjDc7Qe3g1HU7HrNn+npHN7Dc9srFmsC7srLPdtenagjWFwPGav/K20zi7A1Tb05i07bw7ETeFe9gEz2V9IYagV9u2R6tTXrxlR1rPueVudMnpJDZ5J6Zet2kiH3XaTkqqu/Cs5S3f6m+mJhZccjqNLReIxHGlevQ96lJXUGHgeuUuQ10E8xWkeHTB5PeOTl/X8ZUrweNSc/cGvOkzUzLBeBVnYD9nBSkOeWcSwRXrTvbKozq5VlWV1Pm5wPztHlg7qtdhDRJ9x0zI9LErvX46IMb9zLmOPJzPOXivQCLV9QsygI+Jh0fdKPrAyHnNjQs0e3H20YdeIrEwxXlThoUrvkznzbtuFt0XRAUC6LGNZ8do87VcU5tTHXoFQm1+J8lBLrzwuoQ6AF1FoxR1HpBJtZ5narO9lW8hUydJdTltV7r/MmiMtzn4eMH2LFAP4bzOhuCXs51osRzgH5157IYkiHWHYwHm1aUdoDDmd9z8ElQLKIQ4nPNbAbcxlnApjcD+OIlU0sy92i9SkBj8yK2P2QJt8ddkQoiurd5ZzjIZQqaWPQM/mRCZjMT3Gzoev7UQueKHecustjd2NGNxyKg7oBwXH+LUZyqZTza6RUGHXSYgsXnxQ9fKUHEgIFE8/aYQkLjr2tchz3aC8N+9nc4hiesQKGBURmDj3ZzV3F8bQdh5CgYkrkXgaBXZv8WRucddm5uxZG571qWbJ3E9ArtVBE8f67BIfFwlvGoxj6qp0MHO7Tbci2sS2C4bOtdJ03ATfCPwosVcuA3jkjD4+7u4PRLZ1airSYFmFRsXEvVSXpU1fGuAdrSk2p6uIj6TVWNBRmdFMdeQSOlkblh1UsAagJzQpmU4DYhinMUsNrKyxZy3nkHEwrP0KkG7xRa9DK5bvxpp9SPB80x8uAilzUkFUv0st3DpX5R24lx22MYVaMGpLG/t79KO5XOCPSboC7OD14bR9IKMi/CZlNvhUy4v4iJ3Xp/IZlarirXSqI6jurWdf/A/cg2ouhn03c3qk0FOxlHqlv1eYm+pbPrzwoSZvPqmIQ6217hwpX5ZacavdSib4DEPD6SteHl1k0iFZ5nkHr1HXs7vtg0nKZRrWPOBGIxlF7W+uoiNPABUqzPV7GGvyuMsnB5kTtdeV3mZBfYw7mK1FmBYYhcQ1dMxbpZogkL4lNSpC+a39cbaIoBVLB47s7V2+yT0JinEXlSripvuxr3W1gKVJqLbaKi9zDQiyY9XUQhJP/BLkkhwuMBrvxBNGqEzvAMr5LPltSis5bFYsO+t+hEUCFud0LsDi96S2STfaVHoy2zcHZ3Gr2xDgro7UXHX9MDuasekRSFt7TFSCYeIumlc47KS1eCHnUJDIQRid7QcqxWyehQCLw4uWjnFbALNrrtbGxv+uqysTkI6652ZpUfhyF8QJF2y29dLQLg7sBo/DleiqkkhlCS1uT9PPmns69e1/5E7sLgML6efi6pJ4Y7+APxTcu0fCuEtZF/AruJSDHtJzJMUsg/XTL2GMXf129l6YxgT7EOH+nH6Bw44g0gYrVeR3Dosm4nC+e9Fn/dlNToQ3uT9gajibE5WG/66oumb+34HgbzePBxYMnxu8QdvB1mMWJZ5RhUn/8YjJ9duuWnyO9eY6+BIAw5FHvXwwgPFyT69f/63yCNgFjoegOqVHylZXYhBbzAOv59xpYmrOE8YOf83VpDAh4KPPtzsF8yxFXG8304cbuPyhH/4h/+/+B9GWs/+c9ivzQAAAABJRU5ErkJggg==) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Microservice project using Flask, python, Docker and React JS.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', 
            background: 'url(https://hackr.io/tutorials/learn-microservices/logo/logo-microservices?ver=1557508246)  center / cover'}} >
             </CardTitle>
            <CardText>
              Kubernetes and Cloud projects. Code accessing cloud using API's.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;