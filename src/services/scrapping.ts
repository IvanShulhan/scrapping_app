import axios from 'axios';
import { load } from 'cheerio';
import { IAttachment, IFile } from '../types/types';
import { REGEXES } from '../common/regexes';

export const handleGetId = async (id: string) => {
  try {
    const res = await axios.post(
      'https://emma.maryland.gov/page.aspx/en/rfp/request_browse_public',
      {},
      {
        params: {
          'body:x:txtBpmCodeCalculated_3': id,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

    const matches = res.data.slice(10000).match(REGEXES.TABLE_ELEMENT);

    if (!matches) {
      throw new Error("Such Bid isn't exist");
    }

    return matches[1];
  } catch (error) {
    console.error(error);

    throw new Error();
  }
};

export const handleScrapPage = async (id: string, bidId: string) => {
  try {
    const response = await axios.get(
      `https://emma.maryland.gov/page.aspx/en/bpm/process_manage_extranet/${id}`
    );
    const html = response.data;
    const page = load(html);

    const data = {
      title: page('#body_x_tabc_rfp_ext_prxrfp_ext_x_lblLabel').text(),
      id: bidId,
      dueDate: page(
        '#body_x_tabc_rfp_ext_prxrfp_ext_x_txtRfpRfpEndDateEst'
      ).val(),
      solicitationSummary: page(
        '#body_x_tabc_rfp_ext_prxrfp_ext_x_lblSummary'
      ).text(),
      mainCategory: page('#body_x_tabc_rfp_ext_prxrfp_ext_x_txtFamLabel').val(),
      solicitationType: page(
        '#body_x_tabc_rfp_ext_prxrfp_ext_x_selRfptypeCode_notice .text'
      ).text(),
      attachments: [] as IAttachment[],
    };

    page('tr[data-object-type="content"]').each((_, element) => {
      const title = page(element)
        .find('td[data-iv-role="cell"]')
        .first()
        .text()
        .trim();

      const files = [] as IFile[];
      page(element)
        .find('li.li-file-upload')
        .each((_, el) => {
          const link = page(el).find('a').attr('href');
          const fileName = page(el).text().trim();
          files.push({ link, fileName });
        });

      data.attachments.push({
        title,
        files,
      });
    });

    return data;
  } catch (error) {
    console.error(error);

    throw new Error();
  }
};
