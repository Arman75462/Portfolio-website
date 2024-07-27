import "/src/styles/sections-styles/ContactSection.css";
import data from "/src/assets/data.js";

function ContactSection({ language }) {
  return (
    <footer className="ContactSection" id="ContactSection">
      <h2 className="ContactSection__title section__title">
        {data[language].ContactSection.title}
      </h2>
      <h3 className="ContactSection__subtitle section__subtitle">
        {data[language].ContactSection.subTitle}
      </h3>
      <p className="ContactSection__summary">
        {data[language].ContactSection.endMessage}
      </p>

      {/* CONTACT-INFO */}
      <section className="ContactSection__info">
        {/* PHONE NUMBER */}
        <article className="ContactSection__info-item">
          <img
            loading="lazy"
            src={data[language].ContactSection.contactInfo.telephoneNumberImage}
            alt={
              data[language].ContactSection.contactInfo.telephoneNumberImageAlt
            }
            className="ContactSection__info-icon"
          />
          <p className="ContactSection__info-phone">
            {data[language].ContactSection.contactInfo.telephoneNumber}
          </p>
        </article>

        {/* EMAIL LINK */}
        <article className="ContactSection__info-item">
          <img
            loading="lazy"
            src={data[language].ContactSection.contactInfo.emailImage}
            alt={data[language].ContactSection.contactInfo.emailImageAlt}
            className="ContactSection__info-icon"
          />
          <p className="ContactSection__info-email">
            {data[language].ContactSection.contactInfo.email}
          </p>
        </article>
      </section>

      <footer className="ContactSection__footer">
        <p className="ContactSection__copyright-text">
          {data[language].ContactSection.contactFooter.copyrightText}
        </p>

        {/* CONTACT SOCIAL MEDIA INFO */}
        <article className="ContactSection__social-media-info">
          {/* GITHUB LINK */}
          <a
            href={
              data[language].ContactSection.contactFooter.socialMediaInfo
                .gitHubLink
            }
            className="ContactSection__github-link"
          >
            <img
              src={
                data[language].ContactSection.contactFooter.socialMediaInfo
                  .gitHubImage
              }
              alt={
                data[language].ContactSection.contactFooter.socialMediaInfo
                  .gitHubImageAlt
              }
              className="ContactSection__social-media-image"
            />
          </a>

          {/* LINKEDIN LINK */}
          <a
            href={
              data[language].ContactSection.contactFooter.socialMediaInfo
                .linkedInLink
            }
            className="ContactSection__linkedin-link"
          >
            <img
              src={
                data[language].ContactSection.contactFooter.socialMediaInfo
                  .linkedInImage
              }
              alt={
                data[language].ContactSection.contactFooter.socialMediaInfo
                  .linkedInImageAlt
              }
              className="ContactSection__social-media-image"
            />
          </a>
        </article>
      </footer>
    </footer>
  );
}

export default ContactSection;
