import { createClient } from 'next-sanity';

const projectid = 'tjlg7z4l';
const dataset = 'production';
const apiVersion = '2021-03-25';

export const client = createClient({
  projectId: projectid,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
});
