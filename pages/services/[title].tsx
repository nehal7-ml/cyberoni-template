import { GetStaticPaths, GetStaticProps } from 'next';
import { ServiceWithID } from '../../data/sample_data/sample_services';

import { useEffect } from 'react';
import SubProjectGrid from '../../components/layout/services/dynamicSubprojects';
import ServiceComponent from '../../components/layout/services/service';
import { MetaTagsProps } from '../../context/brains';
import { useBrains } from '../../context/synapse/connections';
import { arr_sample_data } from '../../data/sample_data/sample_services';
import { createServiceLink, getServiceByTitle } from '../../data/services';
import Services from '../services';
interface ServicePageProps {
  service: ServiceWithID;
}

// TODO: Add relevant blogs and products, already exporting in brains
export default function ProductsPageTitle({
  service = arr_sample_data[0],
}: ServicePageProps) {
  const {
    brains,
    brainKeys,
    brainsLoaded,
    brainsMobile,
    brainsSiteOwner,
    brainsSetMetaTags,
  } = useBrains();

  const tagsString = service.tags.join(', ');

  useEffect(
    () => {
      let meta_obj: MetaTagsProps = {
        title: service.more_details.title!,
        description: service.more_details.description[0].content!,
        image: service.more_details.imageUrl!,
        keyWords: tagsString,
      };
      brainsSetMetaTags(meta_obj);
      return () => {};
    },
    //eslint-disable-next-line
    []
  );
  // Render the service page using the data passed in as props
  const renderServiceComponent = (service: ServiceWithID) => {
    console.log('Service Check', service);

    if (
      service.htmlEmbed?.dynamicRenderObj.showHtml &&
      service.htmlEmbed?.html
    ) {
      return (
        <>
          {service.htmlEmbed?.html.map((service, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: service || '' }}
            />
          ))}
          {service.htmlEmbed.dynamicRenderObj.showFeatured && (
            <div id="key-features">
              <SubProjectGrid subProjects={service.sub_projects} />
            </div>
          )}
        </>
      );
    } else {
      return <ServiceComponent service={service} />; // Or any other fallback component or content
    }
  };
  return (
    <div>
      {renderServiceComponent(service)}

      <Services />
    </div>
  );
}

// Generate the paths for all services at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const services: ServiceWithID[] = arr_sample_data;

  // Use the createServiceLink function to generate the paths
  const paths = services.map((service) => {
    // Extract the title from the generated service link
    const title = createServiceLink(service);
    const transformedTitle = title.replace(/^\/services\//, ''); // Remove leading "/services/"

    // Use the transformed title as a param in your path
    return { params: { title: transformedTitle } };
  });

  return { paths, fallback: false };
};

// Fetch the data for a single service at build time
export const getStaticProps: GetStaticProps<ServicePageProps> = async ({
  params,
}) => {
  // console.log(params)
  const titleWithSpaces = (params!.title as string)
  

  console.log(titleWithSpaces);
  const service: ServiceWithID | null = getServiceByTitle(titleWithSpaces);
  // console.log(service); // Log the service to console
  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      service,
    },
  };
};
