import matplotlib.pyplot as plt
import numpy as np

# Definir el tiempo en horas
hours = np.arange(0, 25, 1)  # de 0 a 24 horas

# Simulación de la evolución de la hinchazón tras un golpe en las primeras 24 horas
# Esta es una simplificación y puede variar según el caso
# La hinchazón suele aumentar rápidamente y luego comienza a estabilizarse

# Hipótesis de hinchazón: aumenta rápidamente en las primeras horas y se estabiliza
swelling = np.piecewise(hours, 
                        [hours < 6, (hours >= 6) & (hours < 12), hours >= 12],
                        [lambda x: 2*x, lambda x: 12, lambda x: 12 - 0.5*(x-12)])

# Crear el gráfico
plt.figure(figsize=(10, 5))
plt.plot(hours, swelling, label="Evolución de la Hinchazón", color="b", marker="o")
plt.xlabel("Horas desde el golpe")
plt.ylabel("Nivel de hinchazón (arbitrario)")
plt.title("Evolución de la Hinchazón durante las primeras 24 horas")
plt.axvline(x=6, color='r', linestyle='--', label="Máxima hinchazón (~6 horas)")
plt.axvline(x=12, color='g', linestyle='--', label="Comienzo de disminución (~12 horas)")
plt.legend()
plt.grid(True)
plt.show()
