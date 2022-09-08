export const formatCondition = (value: 'not_specified' | 'used' | 'new') => {
  switch (value) {
    case 'new':
      return 'Nuevo';

    case 'used':
      return 'Artículo usado';

    default:
      return 'No especificado';
  }
};
