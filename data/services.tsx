import { v4 as uuidv4 } from "uuid";
import {
  ServiceWithID,
  sample_data as sd,arr_sample_data as arr_sd,
  
} from "./sample_data/sample_services";
import { SubProject } from "./sample_data/sample_sub_services";
const getServices = (): ServiceWithID[] => {
  return Object.keys(sd).map((serviceID) => ({
    id: Number(sd.id),
    preview: sd[serviceID].preview,
    more_details: sd[serviceID].more_details,
    sub_projects: sd[serviceID].sub_projects,
    tags: sd[serviceID].tags, // Add the `tags` property to each object
  }));
};

const getServiceByID = (id: number): ServiceWithID | null => {
  if (arr_sd[id]) {
    const service: ServiceWithID = {
      id,
      tags: arr_sd[id].tags,
      preview: arr_sd[id].preview,
      more_details: arr_sd[id].more_details,
      sub_projects: arr_sd[id].sub_projects,
      htmlEmbed: arr_sd[id].htmlEmbed,
    };

    return service;
  }

  alert('Service Not Found');
  return null;
};

export const servicesWithId = Object.entries(sd).map(([key, value]) => {
  const id = uuidv4();
  return [id, { ...value, id: value.preview.id ? value.preview.id : id }];
});

export const servicesWithIdObj = Object.fromEntries(servicesWithId);

function getObjectById(id: string) {
  return servicesWithIdObj[id];
}

export function getSubServiceById(
  serviceId: string,
  subServiceId: number,
): SubProject | undefined {
  const service = servicesWithIdObj[serviceId];
  // console.log("service", service);
  if (service) {
    const subService = service.sub_projects.find(
      (s: SubProject) => s.id === subServiceId,
    );
    return subService;
  }
}

//Console Log Tests
// console.log("servicesWithIdObj", servicesWithIdObj);
// console.log("servicesWithId", servicesWithId);
const servicesKeys = [] as string[];

for (let key of Object.keys(servicesWithIdObj)) {
  servicesKeys.push(key);
}
let firstKey = Object.keys(servicesWithIdObj)[0];
let firstSubKey;
let test_found_object: any;

// Test Getting Services
try {
  test_found_object = getObjectById(firstKey);
  // console.log("Test_Passed: found_first_object", test_found_object);
  firstSubKey = test_found_object.sub_projects[0].id;
  // console.log("firstSubKey", firstSubKey);
} catch (error) {
  const err = error as Error;
  console.log(`Error: ${err.message}`);
}

// Export test_found_object variable
export { test_found_object };

try {
  let sub_service = getSubServiceById(firstKey, firstSubKey);
  // console.log("Test Passed: First sub_service_found", sub_service);
} catch (error) {
  const err = error as Error;
  console.log(`Error: ${err.message}`);
}

// export function undoTitleTransformations(urlTitle: string): string {
//   let title = urlTitle;

//   // Replace dashes with spaces
//   title = title.replace(/-/g, ' ');

//   // Return the reconstructed title
//   return title;
// }

export function createServiceLink(service: ServiceWithID) {
  let title = service.more_details.title;

  // To lowercase
  title = title.toLowerCase();

  // Replace spaces with dashes
  title = title.replace(/\s+/g, '-');

  return `/services/${title}`;
}




export const getServiceByIdDynamic = (id: number): ServiceWithID | null => {
  const service = arr_sd.find((service) => service.id === id);
  return service || null; // Return the found service or null if not found
};
export const getServiceByTitle = (title: string): ServiceWithID | null => {
  // Normalize the input title
  const normalizedTitle = title
    .toLowerCase() // convert to lower case
    .replace(/^\/services\//, '') // remove leading "/services/"
    .replace(/\s+/g, ' ') // replace multiple spaces with a single space
    .trim() // remove spaces at the beginning and the end
    .replace(/-/g, ' ') // replace dashes with spaces
    .replace(/[^\w\s]/g, ''); // remove special characters

  const service = arr_sd.find((service) => {
    // Normalize the service title
    const normalizedServiceTitle = service.more_details.title
      .toLowerCase() // convert to lower case
      .replace(/\s+/g, ' ') // replace multiple spaces with a single space
      .trim()
      .replace(/-/g, ' ') // remove spaces at the beginning and the end
      .replace(/[^\w\s]/g, ''); // remove special characters

    console.log(normalizedServiceTitle, '**', normalizedTitle);
    console.log(normalizedServiceTitle === normalizedTitle);
    return normalizedServiceTitle === normalizedTitle;
  });
  console.clear()
  return service || null; // Return the found service or null if not found
};


export { getServices, getObjectById, getServiceByID, servicesKeys };
