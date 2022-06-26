import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      carouselImages: [
        "https://scontent.fbom17-1.fna.fbcdn.net/v/t1.6435-9/111415501_3255545677821600_8013267186653696661_n.jpg?stp=dst-jpg_s180x540&_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KoB2dwR5mjUAX9eccWC&_nc_ht=scontent.fbom17-1.fna&oh=00_AT8W20xSXuJXCF1pa-offy3jRuRh0r1rFvi6NzrAOVyrTA&oe=62DCBFF3",
        "https://cdn4.iconfinder.com/data/icons/maths-symbol/128/mathematics-24-512.png",
        "https://developerpitstop.com/wp-content/uploads/2021/08/html-css-js.jpeg",
        "https://www.datocms-assets.com/14946/1633281680-ux-vs-ui-cover-edited.png?auto=format&w=912",
        "https://ares.decipherzone.com/blog-manager/uploads/ckeditor_arv.png",
      ],
      carouselText: [
        "JavaScript: The All-in-one language",
        "Simple syntax, great potential",
        "The #1 language for frontend with HTML-CSS",
        "Amazing for UI/UX and effects (like this auto scroll carousel!)",
        "The source for a ton of great frameworks like React",
      ],
      carouselIndex: 0,
    };
  }

  autoScroll = () => {
    if (this.state.carouselIndex === 4) {
      this.setState({ carouselIndex: 0 });
    } else {
      this.setState({
        carouselIndex: this.state.carouselIndex + 1,
      });
    }
    console.log(this.state.carouselIndex);
  };

  increment = () => {
    setInterval(() => {
      this.autoScroll();
    }, 5000);
  };

  componentDidMount() {
    setTimeout(this.increment(), 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#37ecba", "#72afd3"]}
          style={styles.background}
        >
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <Image source={require("./jslogo.png")} style={styles.logo} />
              <Text style={styles.headerText}>JavaScript</Text>
            </View>
            <View style={styles.nav}>
              <TouchableOpacity style={styles.aboutjs}>
                <Text style={styles.navText}>ABOUT JAVASCRIPT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.frameworks}>
                <Text style={styles.navText}>JAVASCRIPT FRAMEWORKS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.websites}>
                <Text style={styles.navText}>JAVASCRIPT WEBSITES</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.carousel}>
            <Image
              source={{
                uri: this.state.carouselImages[this.state.carouselIndex],
              }}
              style={styles.image}
            />
            <Text style={styles.text}>
              {this.state.carouselText[this.state.carouselIndex]}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.arrowBox1}
            onPress={() => {
              if (this.state.carouselIndex === 0) {
                this.setState({ carouselIndex: 4 });
              } else {
                this.setState({
                  carouselIndex: this.state.carouselIndex - 1,
                });
              }
            }}
          >
            <Text style={styles.arrows}>{"<"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.arrowBox2}
            onPress={() => {
              if (this.state.carouselIndex === 4) {
                this.setState({ carouselIndex: 0 });
              } else {
                this.setState({
                  carouselIndex: this.state.carouselIndex + 1,
                });
              }
            }}
          >
            <Text style={styles.arrows}>{">"}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 625,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 625,
  },
  header: {
    height: 110,
    width: 350,
    marginTop: 30,
    marginLeft: 30,
    justifyContent: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 45,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: -10,
  },
  headerContainer: {
    flexDirection: "row",
  },
  nav: {
    height: 110,
    width: 550,
    marginTop: 30,
    marginLeft: 400,
    justifyContent: "center",
    flexDirection: "row",
  },
  carousel: {
    height: 450,
    width: 600,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 15,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
  },
  image: {
    width: 350,
    height: 450,
    resizeMode: "contain",
    marginTop: -30,
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "calibri",
    color: "black",
    marginTop: -30,
  },
  arrowBox1: {
    height: 50,
    width: 50,
    marginLeft: 300,
    marginTop: -250,
  },
  arrowBox2: {
    height: 50,
    width: 50,
    marginLeft: 1040,
    marginTop: -60,
  },
  arrows: {
    fontSize: 50,
  },
  aboutjs: {
    height: 80,
    width: 200,
    marginLeft: -10,
    alignItems: "center",
    justifyContent: "center",
  },
  frameworks: {
    height: 80,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  websites: {
    height: 80,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
