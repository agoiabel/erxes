export const EMAIL_CONTENT_CLASS = 'erxes-email-content';
export const EMAIL_CONTENT_PLACEHOLDER = `<div class="${
  EMAIL_CONTENT_CLASS
}"></div>`;

export const MESSAGE_KINDS = {
  AUTO: 'auto',
  VISITOR_AUTO: 'visitorAuto',
  MANUAL: 'manual',
  ALL_LIST: ['auto', 'visitorAuto', 'manual']
};

export const EMAIL_CONTENT_KEYS_FOR_SELECT = [
  {
    group: { value: 'customer', text: 'Customer' },
    options: [
      { value: 'name', text: 'Name' },
      { value: 'email', text: 'Email' }
    ]
  },
  {
    group: { value: 'user', text: 'User' },
    options: [
      { value: 'fullName', text: 'Fullname' },
      { value: 'position', text: 'Position' },
      { value: 'email', text: 'Email' }
    ]
  }
];

export const statusFilters = [
  { key: 'live', value: 'Live' },
  { key: 'draft', value: 'Draft' },
  { key: 'paused', value: 'Paused' },
  { key: 'yours', value: 'Your messages' }
];

export const MESSAGE_KIND_FILTERS = [
  { name: 'auto', text: 'Auto' },
  { name: 'visitorAuto', text: 'Visitor auto' },
  { name: 'manual', text: 'Manual' }
];

export const MESSENGER_KINDS = {
  CHAT: 'chat',
  NOTE: 'note',
  POST: 'post',
  ALL_LIST: ['chat', 'note', 'post'],
  SELECT_OPTIONS: [
    { value: 'chat', text: 'Chat' },
    { value: 'note', text: 'Note' },
    { value: 'post', text: 'Post' }
  ]
};

export const METHODS = {
  MESSENGER: 'messenger',
  EMAIL: 'email',
  ALL_LIST: ['messenger', 'email']
};

export const SENT_AS_CHOICES = {
  BADGE: 'badge',
  SNIPPET: 'snippet',
  FULL_MESSAGE: 'fullMessage',
  ALL_LIST: ['badge', 'snippet', 'fullMessage'],
  SELECT_OPTIONS: [
    { value: 'badge', text: 'Badge' },
    { value: 'snippet', text: 'Snippet' },
    { value: 'fullMessage', text: 'Show the full message' }
  ]
};

export const VISITOR_AUDIENCE_RULES = [
  { value: '', text: '' },
  { value: 'browserLanguage', text: 'Browser language' },
  { value: 'currentPageUrl', text: 'Current page url' },
  { value: 'country', text: 'Country' },
  { value: 'city', text: 'City' },
  { value: 'numberOfVisits', text: 'Number of visits' }
];

const stringTypeChoices = [
  { value: '', text: '' },
  { value: 'is', text: 'is' },
  { value: 'isNot', text: 'is not' },
  { value: 'startsWith', text: 'starts with' },
  { value: 'endsWith', text: 'ends with' },
  { value: 'contains', text: 'contains' },
  { value: 'doesNotContain', text: 'does not contain' },
  { value: 'isUnknown', text: 'is unknown' },
  { value: 'hasAnyValue', text: 'has any value' }
];

const numberTypeChoices = [
  { value: '', text: '' },
  { value: 'greaterThan', text: 'Greater than' },
  { value: 'lessThan', text: 'Less than' },
  { value: 'is', text: 'is' },
  { value: 'isNot', text: 'is not' },
  { value: 'isUnknown', text: 'is unknown' },
  { value: 'hasAnyValue', text: 'has any value' }
];

export const RULE_CONDITIONS = {
  browserLanguage: stringTypeChoices,
  currentPageUrl: stringTypeChoices,
  country: stringTypeChoices,
  city: stringTypeChoices,
  numberOfVisits: numberTypeChoices
};
