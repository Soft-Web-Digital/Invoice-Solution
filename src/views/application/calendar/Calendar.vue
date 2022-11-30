<template>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-header></layout-header>
			<layout-sidebar></layout-sidebar>
			
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<calendarheader />
					
					<div class="row">
						<calendardrag />
						<div class="col-lg-9 col-md-8">
							<div class="card bg-white">
								<div class="card-body">
									 <FullCalendar :options="calendarOptions" :events="events"></FullCalendar>
								</div>
							</div>
						</div>
					</div>
				
				<calendarmodal />

				</div>	

			</div>
			<!-- /Main Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
</template>

<script>
  import Vue from 'vue'
  import FullCalendar from "@fullcalendar/vue3";
  import {
  CalendarOptions,
  EventApi,
  DateSelectArg,
  EventClickArg,
} from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
  export default {
    components: {
    FullCalendar,
    },
    data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        events: [
        {
            title  : '10.02p Test Event 1',
            start  : '2020-08-29',
        },
        {
            title  : '7.55p Test Event 3',
            start  : '2020-09-02',
        },
      ],

        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
    }
  },
  props: {
    msg: String,
  },
    mounted() {

    }
  }
</Script>
