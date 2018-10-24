import CMS from 'netlify-cms';

import AllRunnersPagePreview from './preview-templates/AllRunnersPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import RunnerPreview from './preview-templates/RunnerPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

CMS.registerPreviewTemplate('kosucular', AllRunnersPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('runners', RunnerPreview);
