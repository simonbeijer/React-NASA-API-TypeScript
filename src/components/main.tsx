import React, { CSSProperties } from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import SidebarDiv from "./sidebardiv";


interface Props {
  size: string;
}

interface State {
  toggleSidebar: boolean;
}

class MainComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toggleSidebar: false
    };

    this.clickSidebar = this.clickSidebar.bind(this);
  }

  clickSidebar() {
    this.setState(state => ({
      toggleSidebar: !state.toggleSidebar
    }));
  }

  render() {
    return (
      <>
        <main 
        style={this.props.size === "desktop" ? MainStyle : MainStyleMobile}
        >
              <Header
                overflow={this.state.toggleSidebar}
                size={this.props.size}
              />
              <Sidebar
                size={this.props.size}
                sidebarToggle={this.clickSidebar}
              />
              <Footer
                overflow={this.state.toggleSidebar}
                size={this.props.size}
                />
              <SidebarDiv 
              size={this.props.size} toggleSidebar={this.state.toggleSidebar}
              />
        </main>
      </>
    );
  }
}

export default MainComponent;

const MainStyle: CSSProperties = {
  minHeight: "100%",
  backgroundImage:
    "url(https://images.unsplash.com/photo-1435224668334-0f82ec57b605?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed"
};

const MainStyleMobile: CSSProperties = {
  minHeight: "100%",
  backgroundImage:
    "url(https://images.unsplash.com/photo-1435224668334-0f82ec57b605?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed"
};