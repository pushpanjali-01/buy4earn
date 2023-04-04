import React from 'react'
import { Container } from 'react-bootstrap'
import privacy_banner from "../../asserts/images/privacy_banner.svg"
import Footer from '../../components/footer'
import "./style.css"
export default function Privacyandpolicy() {
  return (
    <main>
      <section className='privacy-banner'>
        <div className='privacy-banner-image'>
          <img src={privacy_banner} alt="" />
        </div>
      </section>
      <section className='privacy-section-main'>
        <Container>
          <div className='privacy-section'>
            <div className='privacy-heading'>
              <p>Privacy Policies</p>
            </div>
            <div className='privacy-sub-heading'>
              <p>We i.e. "grozep" (formerly known as Grofers India Private Limited) (“Company”), are committed to protecting the privacy and security of your personal information. Your privacy is important to us and maintaining your trust is paramount.This privacy policy explains how we collect, use, process and disclose information about you. By using our website/ app/ platform and affiliated services, you consent to the terms of our privacy policy (“Privacy Policy”) in addition to our ‘Terms of Use.’ We encourage you to read this privacy policy to understand the collection, use, and disclosure of your information from time to time, to keep yourself updated with the changes and updates that we make to this policy.This privacy policy describes our privacy practices for all websites, products and services that are linked to it. However this policy does not apply to those affiliates and partners that have their own privacy policy. In such situations, we recommend that you read the privacy policy on the applicable site.</p>
            </div>
          </div>
          <div className='privacy-section'>
            <div className='privacy-heading'>
              <p>The collection, storage and use of information related to you</p>
            </div>
            <div className='privacy-sub-heading'>
              <p>We may automatically store certain information including but not limited to information about your web browser, IP address, cookies stored on your device and other information about you based upon your behaviour on the website. We use this information to do internal research on our users’ demographics, interests and behaviour to better understand, protect and serve our users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on the website or not), which URL you next go to (whether this URL is on the website or not), your computer browser information, your IP address, and other information associated with your interaction with the website.</p>
              <p>We may also share your Mobile IP/Device IP with third party(ies) and to the best of our knowledge, be-life and representations given to us by these third party(ies) this information is not stored by them.</p>
              <p>We also collect and store personal information provided by you from time to time on the website/app. We only collect and use such information from you that we consider necessary for achieving a seamless, efficient and safe experience, customized to your needs including:</p>
              <div className='privacy-list'>
                <ul>
                  <li>
                    To enable the provision of services opted by you;
                  </li>
                  <li>
                    To communicate necessary account and product/service related information from time to time;
                  </li>
                  <li>
                    To allow you to receive quality customer care services;
                  </li>
                  <li>
                    To undertake necessary fraud and money laundering prevention checks, and comply with the highest security standards;
                  </li>
                  <li>
                    To comply with applicable laws, rules and regulations; and
                  </li>
                  <li>
                    To provide you with information and offers on products and services, on updates, on promotions, on related, affiliated or associated service providers and partners, that we believe would be of interest to you
                  </li>
                </ul>
              </div>
            </div>
            <div className='privacy-section'>
              <div className='privacy-heading'>
                <p>Changes to the privacy policy</p>
              </div>
              <div className='privacy-sub-heading'>
                <p>grozep reserves the right to change this policy from time to time. Any changes shall be effective immediately upon the posting of the revised Privacy Policy. We encourage you to periodically review this page for the latest information on our privacy practices</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  )
}
