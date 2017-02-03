/*****************************************************************************/
/* Appointment: Event Handlers */
/*****************************************************************************/
Template.AppointmentCreate.events({
    'click input[type=checkbox]': (e) => {
        var inp_motives = $('input[type=checkbox]:checked');
        var explain = false;
        $.each(inp_motives, function (key, motive) {
            var visitm_temp = Visitmotive.findOne({ _id: motive.value });
            if (visitm_temp.canexplain) {
                explain = true;
            }
        });
        if (explain) {
            $('textarea[name="explanation"]').removeAttr('disabled');
        } else {
            $('textarea[name="explanation"]').attr('disabled', 'disabled');
        }
    },
    'submit form': (event) => {
        event.defaultPrevented();
        console.log("Submit form");
    }
});

/*****************************************************************************/
/* Appointment: Helpers */
/*****************************************************************************/
Template.AppointmentCreate.helpers({
    visitmotives: function () {
        return Visitmotive.find().map(function (vm) {
            return { label: vm.name, value: vm._id };
        });
    },
    explain: function (motives_checkboxes) {
        $.each(motives_checkboxes, function (key, value) {
            var visitm_temp = Visitmotive.findOne({ _id: motive.value });
            if (visitm_temp.canexplain) {
                return true;
            }
        });
        return false;
    },
});

/*****************************************************************************/
/* Appointment: Lifecycle Hooks */
/*****************************************************************************/
Template.AppointmentCreate.onCreated(function () {
    //Create a clock 
    function update() {
        $('#clock').html(moment().format('dddd, MMMM D, YYYY H:mm:ss'));
    }
    setInterval(update, 1000);
});

Template.AppointmentCreate.onRendered(function () {
    let template = Template.instance();
    /* Neet to validate this way because I need to make it manual */
    $('#createVisitHomeForm').validate({
        //Need this, no matter what
        rules: {
            first_name: {
                required: true
            },
            mid_name: {
                minlength: 1
            },
            last_name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cell_phone: {
                required: true,
                phoneUS: true
            },
            origen_country: {
                required: true
            },
            street1: {
                required: true,
                minlength: 8,
                pattern: /^\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?$/
            },
            city: {
                required: true,
                minlength: 5
            },
            state: {
                required: true
            },
            zip: {
                required: true,
                maxlength: 5,
                digits: true,
                pattern: /^[0-9]{5}$/
            },
            explanation: {
                minlength: 5,
            },
        },
        messages: {
            first_name: {
                required: "Name is required"
            },
            last_name: {
                required: "Last name is required"
            },
            email: {
                required: "Email is required"
            },
            cell_phone: {
                required: "Cellphone is required",
                phoneUS: "Must be (###)###-#### format"
            },
            origen_country: {
                required: "Country of origen is required"
            },
            street1: {
                required: "Address is required",
                pattern: "Invalid address format"
            },
            city: {
                required: "City is required"
            },
            state: {
                required: "State is required"
            },
            zip: {
                required: "Zip code is required",
                pattern: "Not a valid zip number"
            },
        },
        submitHandler() {
            let address = {
                street: template.find("[name='street1']").value,
                city: template.find("[name='city']").value,
                state: template.find("[name='state']").value,
                zipcode: template.find("[name='zip']").value,
            };

            let motives = [];
            $.each($('input[name=visitMotive]:checked'), (i, item) => {
                motives.push(item.value);
            })

            let visit = {
                motive: motives,
                explanation: template.find("[name='explanation']").value,
            };

            let client = {
                name: template.find("[name='first_name']").value,
                midname: template.find("[name='mid_name']").value,
                lastname: template.find("[name='last_name']").value,
                email: template.find("[name='email']").value,
                phone: template.find("[name='cell_phone']").value,
                address: address,
            };
            //Call the server inser visit method
            Meteor.call('scheduleVisit', client, visit, function (error) {
                if (error)
                    throwError(error.message);
                else
                    Router.go('home');
            });
        }
    });
});

Template.AppointmentCreate.onDestroyed(function () {
});
