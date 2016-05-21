'use strict';

/*
 * Default configuration
 */

var primary = {

  targetEl: '#bookingjs',
  name: '',
  avatar: '',
  autoload: true,
  includeStyles: true,
  showCredits: true,
  goToFirstEvent: true,
  bookingGraph: 'instant',
  bookingFields: {
    name: {
      placeholder: 'Nom',
      prefilled: false,
      locked: false
    },
    email: {
      placeholder: 'E-mail',
      prefilled: false,
      locked: false
    },
    comment: {
      enabled: true,
      placeholder: 'Commentaires',
      prefilled: false,
      required: false,
      locked: false
    },
    phone: {
      enabled: false,
      placeholder: 'Téléphone',
      prefilled: false,
      required: false,
      locked: false
    },
    voip: {
      enabled: false,
      placeholder: 'Skype',
      prefilled: false,
      required: false,
      locked: false
    },
    location: {
      enabled: false,
      placeholder: 'Localisation',
      prefilled: false,
      required: false,
      locked: false
    }
  },
  timekitConfig: {
    app: 'bookingjs'
  },
  timekitFindTime: {
    future: '4 weeks',
    length: '1 hour'
  },
  timekitCreateBooking: { },
  timekitUpdateBooking: { },
  fullCalendar: {
    header: {
      left: '',
      center: '',
      right: 'aujourd\'hui, précédent, suivant'
    },
    views: {
      agenda: {
        displayEventEnd: false
      }
    },
    allDaySlot: false,
    scrollTime: '08:00:00',
    timezone: 'local',
    nowIndicator: true,
    lang: 'fr'
  },
  localization: {
    showTimezoneHelper: true,
    timeDateFormat: '24h-dmy-mon',
    strings: {
      submitText: 'Réserver maintenant',
      successMessageTitle: 'Merci !',
      timezoneHelperLoading: 'Chargement ...',
      timezoneHelperDifferent: 'Your timezone is %s hours %s of %s (calendar shown in your local time)',
      timezoneHelperSame: 'You are in the same timezone as %s'
    }
  },
  callbacks: {}

};

// Preset: bookingGraph = 'instant'
var bookingInstant = {

  timekitCreateBooking: {
    graph: 'instant',
    action: 'confirm',
    event: {
      invite: true,
      my_rsvp: 'accepted',
      sync_provider: true
    }
  },
  localization: {
    strings: {
      successMessageBody: 'Une invitation a été envoyée à&nbsp;: <br /> %s <br /><br /> Merci d\'accepter cette invitation pour confirmer la réservation.'
    }
  }

};

// Preset: bookingGraph = 'confirm_decline'
var bookingConfirmDecline = {

  timekitCreateBooking: {
    graph: 'confirm_decline',
    action: 'create',
    event: {
      invite: true,
      my_rsvp: 'accepted',
      sync_provider: true
    }
  },
  localization: {
    strings: {
      successMessageBody: "Nous avons bien reçu votre demande et nous vous contacterons lorsque nous l'aurons examinée. <br /><br />Passez une bonne journée&nbsp;!"
    }
  }

};

// Preset: timeDateFormat = '24h-dmy-mon'
var timeDateFormat24hdmymon = {

  fullCalendar: {
    timeFormat: 'HH:mm',
    firstDay: 1,
    views: {
      basic: {
        columnFormat: 'dddd D/M'
      },
      agenda: {
        columnFormat: 'ddd\n D/M',
        slotLabelFormat: 'HH:mm'
      }
    }
  },
  localization: {
    bookingDateFormat: 'D. MMMM YYYY',
    bookingTimeFormat: 'HH:mm',
    emailTimeFormat: 'H:i'
  }

};

// Preset: timeDateFormat = '12h-mdy-sun'
var timeDateFormat12hmdysun = {

  fullCalendar: {
    timeFormat: 'h:mma',
    firstDay: 0,
    views: {
      basic: {
        columnFormat: 'dddd M/D',
      },
      agenda: {
        columnFormat: 'ddd\n M/D',
        slotLabelFormat: 'ha'
      }
    },
  },
  localization: {
    bookingDateFormat: 'MMMM D, YYYY',
    bookingTimeFormat: 'h:mma',
    emailTimeFormat: 'h:ia'
  }

};

// Export objects
module.exports = {
  primary: primary,
  presets: {
    timeDateFormat24hdmymon:  timeDateFormat24hdmymon,
    timeDateFormat12hmdysun:  timeDateFormat12hmdysun,
    bookingInstant: bookingInstant,
    bookingConfirmDecline: bookingConfirmDecline
  }
};
