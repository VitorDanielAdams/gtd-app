export const dateUtils = {
  toISOString: (date: Date): string => {
    return date.toISOString();
  },
  
  fromISOString: (isoString: string): Date => {
    return new Date(isoString);
  },
  
  formatDate: (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  },
  
  formatDateTime: (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  },
}; 