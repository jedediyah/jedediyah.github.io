const problems = {

    simple_motion: [
        {
            q: "Find the speed of a car that travels 50 miles in 2 hours.",
            a: "\\[s=\\frac{d}{t}\\]\\[s=\\frac{50}{2}=25\\text{mph}\\]"
        },
        {
            q: "What is the displacement of a vehicle that moves backwards at 5 m/s for 17 s?",
            a: "\\[v=\\frac{\\Delta x}{\\Delta t}\\]\\[\\Delta x = v \\Delta t\\]\\[\\Delta x = (-5)(17)=-85\\text{ m/s}\\]While we are given 5 m/s as a speed, <em>backwards</em> indicates a negative velocity."
        }
    ],
    accelerated_motion: [
        {
            q: "Which of the following graphs must represent constant, positive acceleration?<ol type='A'><li><img src='img/graph_2024_opt_a01.png'></li><li><img src='img/graph_2024_opt_b01.png'></li><li><img src='img/graph_2024_opt_c01.png'></li><li><img src='img/graph_2024_opt_d01.png'></li></ol>",
            a: "B."
        },
        {
            q: "Which of the points has the greatest acceleration, W, X, Y, or Z?<br><br><img src='img/truck_2023.png'>",
            a: "Y. Acceleration is the slope on a velocity v. time graph, and Y is where the slope is steepest. "
        },
        {
            q: "Is the velocity of the object increasing, decreasing, or constant?<br><br><img src='img/pvt_2023.png'>",
            a: "The velocity is increasing. In a position v. time graph, the slope is the velocity, and here the slope is increasing over time."
        },
        {
            q: "A rocket with a constant acceleration of 25 m/s\\(^{2}\\) has an initial velocity of 200 m/s in the same direction as the acceleration. What is the magnitude of the rocket's velocity 10 s later? ",
            a: "\\[a = \\frac{v_f - v_i}{\\Delta t} \\]\\[v_f = v_i + a \\Delta t \\]\\[v_f= (200) + (25)(10) = 450 \\text{ m/s} \\]"
        },
        {
            q: "A person started from rest at the top of a hill and slid to a stop on a rough rubber mat at the bottom.<br><br><img src='img/sled_2023.png'><br>Sketch a graph of the speed versus time for the person on the sled.",
            a: "The person accelerates at a constant rate down the hill, then slides at a constant speed on the flat ground until they reach the mat and slow to a stop. One possible sketch: <img src='img/sled_graph_2023.png'>"
        },
        {
            q: "<img src='img/svt_2022.png'><br>Which of the following setups would cause the ball to roll with the motion shown in the graph?<ol type='A'><li><img src='img/ramp2022a.png'></li><li><img src='img/ramp2022b.png'></li><li><img src='img/ramp2022c.png'></li><li><img src='img/ramp2022d.png'></li></ol>",
            a: "A. "
        }
    ],
    projectile_motion: [
        {
            q: "A ball rolls off of a 1.2 m tall table with a horizontal velocity of 3 m/s. How much time does it take for the ball to reach the floor? ",
            a: "In the vertical direction, \\[v_i = 0\\]\\[a=-10\\]\\[\\Delta x = -1.2\\]\\[\\Delta x = v_i \\Delta t + \\frac{1}{2} a \\Delta t^2 \\]\\[\\Delta t = \\sqrt{\\frac{2(-1.2)}{-10}}=0.49 \\text{ s}\\]"
        }
    ],
    laws_of_Newton: [
        {
            q: "A 10 kg object accelerates at 5 m/s\\(^{2}\\) over a distance of 4 m. What is the net force on the object?",
            a: "\\[F=ma\\]\\[F=(10)(5)=50 \\text{ N} \\]"
        }, 
        {
            q: "A net force is acting on an object. Which of the following graphs shows the object's position over time? <ol><li><img src='img/force_graph2024_a.png'></li><li><img src='img/force_graph2024_b.png'></li><li><img src='img/force_graph2024_c.png'></li><li><img src='img/force_graph2024_d.png'></li></ol>",
            a: "D. The slope of position vs. time is the velocity, and an increasing slope corresponds to a positve acceleration."
        }, 
        {
            q: "Two objects are separated by a certain distance. Which of the following would <em>most</em> increase the force of gravitational attraction between the objects?<ol type='A'><li>doubling the mass of one of the objects</li><li>doubling the distance between the objects</li><li>reducing the mass of one of the objects by one-half</li><li>reducing the distance between the objects by one-half</li></ol>",
            a: "D. Reducing the distance between the objects by one-half. This would quadruple the force. "
        }, 
        {
            q: "The graph shows the velocity of an object over time, with intervals labeled U-Z. <br><img src='img/vvt_2024.png'><br>During which intervals is the direction of the net force acting on the object opposite to the direction of the object's motion?",
            a: "W and Z."
        },
        {
            q: "Describe the motion of the object based on the free-body diagram. <br><br><img src='img/fbd_2023.png'>",
            a: "The object has a net force upwards, and is accelerating upwards. We do *not* know the current velocity of the object or the direction it is currently moving. "
        },
        {
            q: "A 3.2 kg block is being pulled to the right on a frictionless surface by a force of 50 N.<br><br><img src='img/block_2023.png'><br>Draw a free body diagram of the block and find its acceleration.",
            a: "<img src='img/block_fbd_2023.png'>\\[F=ma\\]\\[a=\\frac{F}{m}=\\frac{50}{3.2}=15.6\\text{ m/s}^{2}\\]"
        },
        {
            q: "The graph shows how the downward speed of a skydiver changes from the moment the skydiver jumps out of an airplane to just before the skydiver’s parachute opens.<br><br><img src='img/skydiver_2022.png'><br>Draw a free-body diagram of the skydiver at time t=30 s.",
            a: "<img src='img/skydiver_fbd.png'>"
        },
        {
            q: "Which graph represents the motion of an object that has zero net force acting on it? <ol type='A'><li><img src='img/gg_2022a.png'></li><li><img src='img/gg_2022b.png'></li><li><img src='img/gg_2022c.png'></li><li><img src='img/gg_2022d.png'></li></ol>",
            a: "D. The acceleration is zero, indicating a net force of zero. \\[a=\\frac{F}{m}\\]"
        }
    ],
    momentum: [
        {
            q: "Which has the greatest momentum?<ol type='A'><li>a 1600 kg car at rest</li><li>a 0.05 kg ball moving at 50 m/s</li><li>a 50 kg athlete running at 8 m/s</li><li>a 100 kg crate being lifted at 1 m/s</li></ol>",
            a: "C. a 50 kg athlete running at 8 m/s. They have a momentum of \\[p=mv = (50)(8)=400 \\text{ kg m/s}\\]"
        }, 
        {
            q: "During a soccer game, a player kicked the 0.42 kg soccer ball into a goal. The ball was traveling 22 m/s when it collided with the net and came to a stop.<br><img src='img/soccer_2024.png'><br>Find the change in momentum of the ball during the collision with the net. If the collision lasted 0.25 s, find the average force the net applied to the ball.",
            a: "\\[\\Delta p = m v_{f} - mv_{i}\\]\\[\\Delta p = (0.42)(0) - (0.42)(22)=-9.42 \\text{ kg m/s} \\]Then \\[\\Delta p = F \\Delta t\\]\\[-9.42 = F (0.25)\\]\\[F = -36.96 \\text{ N}\\]"
        }, 
        {
            q: "Two toy cars, car R and car S, moved toward each other at a constant speed. Car R had a mass of 2 kg, and car S had a mass of 3 kg.<br><img src='img/car_2024.png'><br>What was the total momentum of the system as the cars moved toward each other?",
            a: "\\[p = mv\\]\\[m_1 v_1 + m_2 v_2 = (2)(5)+(3)(-5)=-5 \\text{ kg m/s}\\]"
        }, 
        {
            q: "Two toy cars, car R and car S, moved toward each other at a constant speed. Car R had a mass of 2 kg, and car S had a mass of 3 kg.<br><img src='img/car_2024.png'><br>The two cars collided and bounced off of one another. If car R bounces back with velocity -7 m/s, find the final velocity of car S.",
            a: "\\[m_{1}v_{1i} + m_{2}v_{2i} = m_{1}v_{1f} + m_{2}v_{2f} \\]\\[(2)(5)+(3)(-5)=(2)(-7)+(3)v_{2f}\\]\\[v_{2f}=3 \\text{ m/s}\\]"
        }, 
        {
            q: "A railroad car with a mass of 400,000 kg is moving at a speed of 8.0 m/s toward a stationary railroad car with a mass of 1,200,000 kg, as shown in the diagram. <br><img src='img/train_cars_2024.png'><br> What is the speed of both cars after they connect?",
            a: "2.0 m/s"
        },
        {
            q: "Find the momentum of the larger mass after collision.<br><br><img src='img/collision_2023.png'>",
            a: "\\[m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}\\]\\[(0.02)(1.5)+(0.01)(0)=(0.02)v_{1f}+(0.01)(2)\\]\\[v_{1f}=0.5\\text{ m/s}\\]"
        },
        {
            q: "Information for three vehicles is shown.<br><br><img src='img/momentum_table_2023.png'><br>Order the vehicles from least to greatest momentum. ",
            a: "Car -> Truck -> Van<br>\\[p=mv\\]\\[p_{truck}=(1900)(16)=30400\\]\\[p_{car}=(1200)(24)=28800\\]\\[p_{van}=(1500)(21)=31500\\]"
        },
        {
            q: "A 5.0 kg object is accelerated from rest by a force of 20 N to a final velocity of 5.0 m/s. What is the final momentum of the object?",
            a: "\\[p=mv\\]\\[p=(5)(5)=25\\text{ kg m/s}\\]"
        },
        {
            q: "The velocity of a 75 kg skier increases from 8 m/s to 12 m/s. What is the change in momentum of the skier?",
            a: "\\[\\Delta p = m v_f - m v_i\\]\\[\\Delta p = (75)(12) - (75)(8) = 300 \\text{ kg m/s} \\]"
        }
    ],
    energy: [
        {
            q: "A 2 kg mass is lifted 3 meters. How much gravitational potential energy does it gain?",
            a: "GPE = mgh = 2 × 9.8 × 3 = 58.8 J."
        }, 
        {
            q: "Cats play and sleep on cat towers. A cat tower with two platforms is shown. One platform is 1.8 m above the ground and the second platform is 1.1 m above the ground. <br><img src='img/cat_plat_2024.png'><br><ol><li>What is the gravitational potentail energy of a 1.5 kg cat on the 1.8 m platform?</li><li>The cat jumped from the 1.8 m platform to the 1.1 m platform. As the cat was moving tot he 1.1 m platform, what was happening to its kinetic energy?</li></ol>",
            a: "1. \\[PE = mgh = (1.5)(10)(1.8) = 27 \\text{ J} \\]2. The kinetic energy increased."
        }, 
        {
            q: "Two 65 kg performers are using a teeterboard to perform a routine. One of the performers is at rest on the right side of the teeterboard while the other performer steps off a 3.0 m platform and lands on the left side of the teeterboard. <img src='img/teeter_before_2024.png'> After the performer on the left comes to rest on the left side, the performer on the right moves upward to a maximum height of 2.1 m.<img src='img/teeter_after_2024.png'>What is the percent efficiency of the teeterboard?",
            a: "70%<br><br>Efficiency is the ratio of \\(\\frac{E_{out}}{E_{in}}\\). Here, the energy can be calculated as the total mechanical energy, or maximum potential energy on either side of the teeterboard. \\[\\frac{mgh_2}{mgh_1}=\\frac{2.1}{3}=0.7\\]"
        },
        {
            q: "Order positions W, X, Y, and Z from least to greatest gravitational potential energy.<br><br><img src='img/high_jump_2024.png'>",
            a: "Z - W - X - Y"
        },
        {
            q: "A sled with a mass of 5 kg begins at rest on top of a hill at position Q. The sled moves down the hill and comes to rest on top of the next hill at position R.<br><img src='img/sled_2024.png'><br>As the sled moves from Q to R, how does the mechanical energy of the sled change?",
            a: "Energy is lost. The total energy at R is 450 J less than the energy at Q. <br><br>The energies at Q and R are: \\[E_{Q} = (5)(10)(15)=750\\text{ J}\\]\\[E_{R}=(5)(10)(6)=300 \\text{ J}\\]"
        },
        {
            q: "During which time interval is the most work performed?<br><br><img src='img/work_table_2023.png'>",
            a: "Time interval 1. \\[W=Fd\\]\\[W=(10)(4)=40 \\text{ J}\\]"
        },
        {
            q: "A 350 kg elevator carries a 50 kg person to a height of 4 m above the ground. What is the change in potential energy of both the elevator and the person?",
            a: "\\[PE = mgh\\]\\[PE=(350+50)(10)(4)=16000\\text{ J}\\]"
        },
        {
            q: "The acceleration due to gravity is smaller on Mars than it is on Earth. If a 2 kg object were held 0.75 m above the surface of Mars, it would have 5.7 J of gravitational potential energy. What is the acceleration due to gravity on Mars?",
            a: "\\[g = 3.8 \\text{ m/s}^{2}\\]"
        },
        {
            q: "A student designed a complex machine to turn on a light bulb. Stages are numbered. <br><br><img src='img/Goldberg_2023.png'><br>How much work does gravity do on the marble between steps 2 and 3?",
            a: "\\[W=FD\\]and \\[F=ma\\]so\\[W=(0.1)(10)(0.25)=0.25\\text{ J}\\]"
        }, 
        {
            q: "A marble launcher was made with a spring held in place inside a tube. The diagrams show the launcher before and after energy was transferred from the spring to a block. <br><br><img src='img/launcher_2022.png'><br> Initially the block was held at rest, and the compressed spring stored 0.45 J of elastic potential energy. After the spring was released, the block exited the launcher with 0.3 J of kinetic energy. What was the percent efficiency of the launcher?",
            a: "\\[Eff = \\frac{E_{out}}{E_{in}}\\]\\[Eff=\\frac{0.3}{0.45}=0.66...\\approx 67\\text{%}\\]"
        },
        {
            q: "<img src='img/roller_coaster_2022.png'><br>A 4500 kg roller coaster car is lifted to point W and then released from rest. At points W, X, Y, and Z, find the potential and kinetic energy as well as the velocity of the car.",
            a: "W. \\[PE = (4500)(10)(50)=2250000\\]\\[KE=\\frac{1}{2}(4500)(0)^2=0\\]\\[v=0\\]\\[ME=2250000\\] X. \\[PE = (4500)(10)(25)=1125000\\]\\[KE=ME-PE=1125000\\]\\[v=\\sqrt{\\frac{2 \\cdot KE}{m}}=22.361\\text{ m/s}\\] Y. \\[PE = (4500)(10)(40)=1800000\\]\\[KE=ME-PE=450000\\]\\[v=\\sqrt{\\frac{2 \\cdot KE}{m}}=14.142\\text{ m/s}\\] Z. \\[PE = (4500)(10)(8)=360000\\]\\[KE=ME-PE=1890000\\]\\[v=\\sqrt{\\frac{2 \\cdot KE}{m}}=28.983\\text{ m/s}\\]"
        }
    ],
    heat: [
        {
            q: "A student heats water in a container. What is the order in which the models below should be arranged as the water was heated?<br><img src='img/liquid_heated_2024.png'>",
            a: "The order is B, C, A. The molecules start with less energy and increase in average energy as the water is heated. The arrows give a sense of the velocity of each molecule, and the higher velocities correspond to higher kinetic energies."
        }, 
        {
            q: "The diagram shows an experimental setup to measure heat transfer between two sealed bags of cooking oil. The bags are in an insulated container. Bag X contains 200 mL of cooking oil at 25 C. Bag Y contains 200 mL of cooking oil at 75 C. The temperature of the oil in each bag is recorded over 20 minutes.<br><img src='img/oil_bag_2024.png'><br><br>Which graph shows the temperature of the oil in each bag over the 20-minute period?<ol type='A'><li><img src='img/oil2024_opt_a01.png'></li><li><img src='img/oil2024_opt_b01.png'></li><li><img src='img/oil2024_opt_c01.png'></li><li><img src='img/oil2024_opt_d01.png'></li></ol>",
            a: "B. The temperatures will converge. "
        }, {
            q: "In which of the following water samples do the water molecules have the least average kinetic energy?<ol type='A'><li>100 mL of water at 40 C</li><li>200 mL of water at 35 C</li><li>300 mL of water at 15 C</li><li>400 mL of water at 20 C</li></ol>",
            a: "C. The least average kinetic energy is simply the lowest temperature. "
        }, 
        {
            q: "The temperature of a metal rod increases by 5 C. What additional information is required to calculate the energy that was absorbed by the metal rod?",
            a: "The mass of the rod and the specific heat of the metal. "
        },
        {
            q: "In which section of the graph is the substance changing phase from liquid to gas?<br><br><img src='img/heat_curve_2023.png'>",
            a: "Section Y. The temperature remains constant while heat energy added goes toward changing phase from liquid to gas."
        }
    ],
    radiation: [
        {
            q: "Carbon-14 is produced in Earth's atmosphere. The nucleus of carbon-14 is not stable and changes to nitrogen-14 to become more stable, as shown.<br><img src='img/carbon_2024.png'><br>Describe the type of decay and the products.",
            a: "This is an example of beta decay, in which a neutron changes into a proton and an electron."
        },
        {
            q: "Which of the following is an example of light behaving like a particle? <ol type='A'><li>When violet light shines on a metal plate, electrons are ejected from the metal plate.</li><li>When light passes through slits and interferes, it forms a pattern of bright and dark regions on a wall.</li><li>When a light source is directed onto a soap bubble, reflections from the surface of the bubble produce colors.</li><li>When a laser beam shines on a round object, a circle with a bright spot in the center appears on a screen behind the object.</li></ol>",
            a: "A. This is the photoelectric effect. "
        }, 
        {
            q: "Fill in the blanks: <br><br>In a vacuum, radio waves and infrared radiation have the same ________ but radio waves have a lower frequency than infrared radiation. Therefore, radio waves have a longer _____________ than infrared radiation.",
            a: "speed, and wavelength."
        },
        {
            q: "Three types of decay are represented in the three rows below. Identify the types of decay.<br><br><img src='img/decay_2023.png'>",
            a: "The three rows correspond to beta decay, alpha decay, and gamma decay respectively."
        },
        {
            q: "Ultraviolet radiation from the Sun can cause sunburn, but sitting in a classroom under visible light will not. This is because ultraviolet radiation particles have more energy than visible light particles. <br><br> Which of the following explains why ultraviolet radiation particles have more energy than visible light particles?<ol type='A'><li>Ultraviolet radiation particles have a greater mass.</li><li>Ultraviolet radiation particles have a greater velocity.</li><li>Ultraviolet radiation particles have a greater frequency.</li><li>Ultraviolet radiation particles have a greater wavelength.</li></ol>",
            a: "C. Ultraviolet radiation particles have a greater frequency."
        }
    ],
    electrostatics: [
        {
            q: "The diagram shows two charged particles separated by a distance, d.<br><img src='img/particles_2024.png'><br>What happens the electric force between the particles as they move closer together?",
            a: "\\[F_{e}=k\\frac{q_{1}q_{2}}{d^2}\\]The electric force increases since the particles have opposite charge and the distance is smaller."
        },
        {
            q: "A student is investigating electrostatic forces using two pith balls. Pith balls have a very small mass and can be easily charged. The student charges each pith ball, which results in the balls being separated by a distance, d, as shown in the diagram.<br><img src='img/pith_balls_2024.png'><br>Are the charges on the pith balls alike or opposite? What will happen to the distance d if the magnitude of the charges increases?",
            a: "The pith balls have the <em>same charge</em> and if the charge increases the distance will <em>increase</em>."
        },
        {
            q: "Two charged objects, Y and Z, are at a distance d.<br><br><img src='img/charged_parts_2024.png'><ol><li>Compare the force on Y to the force on Z</li><li>Determine the direction of each force.</li><li>The objects are released and start to move. Describe how the electrostatic force changes as they move. </li></ol>",
            a: "1. The forces are equal and in opposite directions. <br>2. The objects are repelled so that the force on Y is to the left and the force on Z is to the right. <br>3. The objects separate and the electrostatic force decreases as the distance d grows. "
        },
        {
            q: "Order the pairs from least to greatest electrical force.<br><br><img src='img/charged_pairs_2024.png'>",
            a: "B -> A -> C"
        }, 
        {
            q: "Newton's universal law of gravitation and Coulomb's law have mathematical formulas that are similar. Describe some differences between the two.",
            a: "Coulomb's constant is much larger than Newton's, as gravity is a much weaker force. Gravitation is only attractive while electrostatic force can be either attractive or repulsive."
        },
        {
            q: "Two charges are shown.<br><br><img src='img/particles_2022.png'><br>Which of the following describes the electric force between the charges?<ol type='A'><li>Set A has a larger force, which is attractive.</li><li>Set A has a larger force, which is repulsive.</li><li>Set B has a larger force, which is attractive.</li><li>Set B has a larger force, which is repulsive.</li></ol>",
            a: "A."
        },
        {
            q: "<img src='img/moreparticles_2022.png'><br>Which of the following diagrams represents the electric field lines around the two objects?<ol type='A'><li><img src='img/efield_2022a.png'></li><li><img src='img/efield_2022b.png'></li><li><img src='img/efield_2022c.png'></li><li><img src='img/efield_2022d.png'></li></ol>",
            a: "C. Electric field lines point away from positive charge, toward negative charge."
        },
        {
            q: "Two negatively charged spheres are separated by a distance d.<br><br><img src='img/tube_charges_2022.png'><br>Which of the following would increase the distance, d, the most?<ol type='A'><li>adding more negative charges to both spheres</li><li>removing some negative charges from both spheres</li><li>adding more negative charges to one sphere and making the other sphere neutral</li><li>removing some negative charges from one sphere and making the other sphere neutral</li><ol>",
            a: "A. adding more negative charges to both spheres."
        }
    ],
    circuits: [
        {
            q: "A 6.0 V battery, a 2.0 \\(\\Omega\\) resistor, and a 4.0\\(\\Omega\\) light bulb are connected in series. How much current will flow through the circuit?",
            a: "\\[V=IR\\]\\[I=\\frac{V}{R}\\]\\[I=\\frac{6}{2+4}=1\\text{ A}\\]"
        }, 
        {
            q: "The current in the circuit shown is 0.02 A. Find the voltage drop across each resistor and the total voltage drop across the circuit.<br><img src='img/circuit_2024.png'>",
            a: "This is a series circuit and the current is the same through every component. \\[V_{1}=IR_{1}=0.02 \\cdot 100=2\\text{ V}\\] \\[V_{2}=IR_{2}=0.02 \\cdot  300=6\\text{ V}\\]  \\[V_{3}=IR_{3}=0.02 \\cdot  50=1\\text{ V}\\] The total is 9 V."
        }, 
        {
            q: "A student builds a circuit with a battery and a resistor. The student then adds another resistor, as shown. Determine the current in the circuit before and after adding the second resistor.<br><img src='img/two_circuits_2024.png'> ",
            a: "The current changes from 2 A to 1 A.\\[I = \\frac{V}{R}\\] and the total resistance goes from 5 \\(\\Omega\\) to 10 \\(\\Omega\\). Intuitively, doubling the resistance halves the current."
        },
        {
            q: "Find the current through the circuit. Which resistor has the larger voltage drop?<br><br><img src='img/circuitss_2024.png'>",
            a: "\\[V=\\frac{I}{R}\\]\\[I=\\frac{V}{R}=\\frac{24}{10+90}=0.24 \\text{ A}\\]The larger resistor has the bigger voltage drop. "
        },
        {
            q: "Choose values for \\(R_1\\) and \\(R_2\\) so that the current in the circuit is 2 A.<br><br> <img src='img/circuit_2023.png'>",
            a: "For the current to be 2 A, we need to have \\[I = \\frac{V}{R} = 2\\] so the total resistance must be \\[R=\\frac{12}{2}=6\\text{ }\\Omega\\]This can be acheived with resistors of 2 and 4, or any two values that sum to 6."
        },
        {
            q: "A 60 \\(\\Omega\\) resistor is connected to a 1.5 V battery. If the internal resistance of the battery is ignored, what current will flow through the resistor?",
            a: "\\[V=IR\\]\\[I=\\frac{V}{R}=\\frac{1.5}{60}=0.025 \\text{ A}\\]"
        },
        {
            q: "<img src='img/circuit_2022.png'><br>Which of the following would reduce the total current in the circuit by half?<ol type='A'><li>adding a 5 \\(\\Omega\\) resistor in parallel</li><li>adding a 10 \\(\\Omega\\) light bulb in series</li><li>replacing the 20 V battery with a 10 V battery</li><li>replacing the 20 V battery with a 40 V battery</li></ol>",
            a: ""
        },
        {
            q: "Find the current.<br><br><img src='img/acircuit_2022.png'>",
            a: "\\[V=IR\\]\\[I=\\frac{V}{R}\\]\\[I=\\frac{12}{3+6+4}=0.92\\text{ A}\\]"
        }
    ],
    magnetism: [
        {
            q: "In an investigation, a strong magnet is passed through a coil of wire that is connected to a light bulb, as shown.<br><img src='img/wire_2024.png'><br>What does this investigation demonstrate?",
            a: "A changing magnetic field near a wire induces a current. "
        },
        {
            q: "A wire connected in a circuit is placed under a compass. A switch is closed and current current runs through the wire. <br><br><img src='img/compass_2023.png'>Explain why the needle moves when the switch is closed. ",
            a: "Moving electric charges cause a magnetic force."
        },
        {
            q: "Two magnets are separated by a distance \\(d\\) as shown.<br><br><img src='img/magnets_2023.png'><br> Which of the following changes would <em>increase</em> the potential energy stored in the field between the magnets?<ol type='A'><li>increasing the distance</li><li>decreasing the distance</li><li>rotating one magnet so that its south pole faces the north pole of the other</li><li>rotating both magnets so that the south pole of one magnet faces the south pole of the other</li></ol>",
            a: "B. decreasing the distance between the mangets. Pushing the magnets closer as configured increases the repulsive magnetic force that will push them apart when released. "
        },
        {
            q: "During an investigation, a student placed a compass above a wire in a circuit, as shown in the diagram. The student recorded the position of the compass needle when the switch was open and when it was closed.<br><br><img src='img/compass_2022.png'><br>Which of the following claims is supported by evidence produced in this investigation?<ol type='A'><li>An electric current produces a magnetic field</li><li>A magnetic field produces an electric current.</li><li>An electric current flows from a negative to a positive terminal.</li><li>A magnetic field extends from the north pole of a magnet to its south pole.</li></ol>",
            a: "A. An electric current produces a magnetic field. "
        }
    ],
    waves: [
        {
            q: "A sound has a frequency of 110 Hz both in air and in water. The velocity of sound is 340 m/s in air and 1500 m/s in water.<br><br> How does the wavelength of sound in water compare to its wavelength in air?",
            a: "The wavelength in water is about 4.40 times longer.\\[v=\\lambda f\\]"
        }, 
        {
            q: "Identify the mechanical wave commonly used for communication between people near each other.",
            a: "Sound."
        }, 
        {
            q: "Identify which type of wave, mechanical or electromagnetic, should be used to send a signal from Earth to a rove ron the surface of Mars. ",
            a: "Electromagnetic waves should be used. Mechanical waves have no medium through which to propagate in space (there is no air for sound). "
        }, 
        {
            q: "Sonar is a technology that uses sound waves to measure distances underwater. Sonar can be used by a ship to produce a detailed image of the bottom of an ocean. The diagram shows a ship using sonar.<br><img src='img/sonar_2024.png'><br>To produce a detailed image of the bottom of the ocean, is the sound wave emitted by the ship absorbed, diffracted, reflected, or refracted by the bottom of the ocean?",
            a: "Reflected."
        },
        {
            q: "Draw a simple wave and label the wavelength and amplitude.",
            a: "For example, <img src='img/wave_example_2024.png'>"
        },
        {
            q: "Which of the following statements describes a difference between an electromagnetic wave and a mechanical wave?<ol type='A'><li>An electromagnetic wave always travels more slowly than a mechanical wave.</li><li>An electromagnetic wave is a longitudinal wave, and a mechanical wave is not.</li><li>An electromagnetic wave can travel in a vacuum, and a mechanical wave cannot.</li><li>An electromagnetic wave always has a lower frequency than a mechanical wave.</li></ol>",
            a: "C. "
        }
    ]
};
