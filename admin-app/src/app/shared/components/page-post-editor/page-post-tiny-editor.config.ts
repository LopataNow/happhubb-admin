import { RawEditorOptions } from 'tinymce';

export const tinyEdiorInitConfig: RawEditorOptions  = {
  height: 800,
  menubar: true,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
  ],
  a11ychecker_level: 'aaa',
  typography_langs: [ 'en-US' ],
  typography_default_lang: 'en-US',
  advcode_inline: true,
  style_formats: [
    {title: 'Heading 1', block: 'h1'},
    {title: 'Heading 2', block: 'h2'},
    {title: 'Paragraph', block: 'p'},
    {title: 'Blockquote', block: 'blockquote'},
    {title: 'Image formats'},
    {title: 'Medium', selector: 'img', classes: 'medium'},
  ],
  object_resizing: false,
  valid_classes: {
    'img': 'medium',
    'div': 'related-content'
  },
  image_caption: true,
  noneditable_class: 'related-content',
  toolbar:
      'undo redo | styles | bold italic underline strikethrough | align | \
      table link image media pageembed | bullist numlist outdent indent | \
      spellcheckdialog a11ycheck typography code'
};