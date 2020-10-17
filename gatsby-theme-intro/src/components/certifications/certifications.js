import React, { Component } from 'react';
import { arrayOf, shape, CertificationType } from "../../types"
import Carousel, { Modal, ModalGateway } from 'react-images';
import LazyLoad from 'react-lazyload';

function getImagesArray(certifications) {
    var imageObjArr = [];
    for (let i = 0; i < certifications.length; i++) {
        var image = certifications[i].image;
        var isuuer = certifications[i].issuer;
        var program = certifications[i].program;
        var date = certifications[i].date;
        var url = certifications[i].url;
        // var imageComponent = (
        //   <Img fluid={image.childImageSharp.fluid} alt={name} />
        // );
        var imageObj = {
          caption: isuuer + ": " + program + ", " + date + ". " + url.link(url),
          alt: program,
          source: {
            download: image.childImageSharp.fluid.src,
            fullscreen: image.childImageSharp.fluid.src,
            regular: image.childImageSharp.fluid.srcWebp,
            thumbnail: image.childImageSharp.fluid.srcWebp
          }
        }
        imageObjArr.push(imageObj);
    }
    return imageObjArr;
}

class Certifications extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          modalIsOpen: false,
          selectedIndex: 0, 
        };
        this.toggleModal = this.toggleModal.bind(this);
      }
    
    toggleModal = (selectedIndex) => {
        this.setState(state => ({ 
          modalIsOpen: !state.modalIsOpen,
          selectedIndex,
         }));
      };

    render() {
        const { modalIsOpen, selectedIndex } = this.state;
        return (
          <LazyLoad>
            <Gallery>
              {this.props.certifications.map(({ program, image }, j) => (
                <Image
                  onClick={() => this.toggleModal(j)}
                  key={program}
                  className="hover:opacity-75 transition-opacity duration-150"
                >
                  <img
                    alt={program}
                    src={image.childImageSharp.fluid.srcWebp}
                    style={{
                      cursor: 'pointer',
                      position: 'absolute',
                      maxWidth: '100%',
                    }}
                  />
                </Image>
              ))}
            </Gallery>
            <ModalGateway>
                {modalIsOpen ? (
                <Modal onClose={this.toggleModal}>
                    <Carousel 
                      views={getImagesArray(this.props.certifications)} 
                      currentIndex={selectedIndex}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
          </LazyLoad>
        );
    }
}

const gutter = 2;

const Gallery = (props) => (
  <div
    style={{
      overflow: 'hidden',
      marginLeft: -gutter,
      marginRight: -gutter,
    }}
    {...props}
  />
);

const Image = (props) => (
  <div
    style={{
      backgroundColor: '#eee',
      boxSizing: 'border-box',
      float: 'left',
      margin: gutter,
      overflow: 'hidden',
      paddingBottom: '20%',
      position: 'relative',
      width: `calc(25% - ${gutter * 2}px)`,
    }}
    {...props}
  />
);

Certifications.propTypes = {
  certifications: arrayOf(shape(CertificationType)),
};

export default Certifications;